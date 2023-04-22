const dotenv = require('dotenv');
dotenv.config();
const Organization = require('../modal/organization');
const Driver = require('../modal/driver');
const User = require('../modal/user');
const Ride = require('../modal/ride');
const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const { main } = require("../mapAlgo/main");

// POST /api/organizations/join/driver
exports.joinDriverToOrganization = async (req, res, next) => {
  const { driverId, organizationName } = req.body;
  try {
    // Find organization by name
    const organization = await Organization.findOne({ name: organizationName });
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    // Find driver by ID
    const driver = await Driver.findById(driverId);
    if (!driver) {
      return res.status(404).json({ error: 'Driver not found' });
    }
    if (organization.drivers.includes(driverId)) {
      return res.status(400).json({ message: "Driver already joined to this organization" });
    }
    // Add driver to organization's driver list
    organization.drivers.push(driver._id);

    // Save changes to organization
    await organization.save();

    // Add organization to driver's organization list
    driver.organizations.push(organization);

    // Save driver to database
    await driver.save();

    // Return success response
    res.status(201).json({ message: 'Driver added to organization' });
  } catch (error) {
    // Handle errors
    next(error);
  }
};


// POST /api/organizations/join
exports.joinUserToOrganization = async (req, res, next) => {
  const { userId, orgId, location } = req.body;

  try {
    // Find organization by ID
    const organization = await Organization.findById(orgId);
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (organization.employees.includes(userId)) {
      return res.status(400).json({ message: "User already joined to this organization" });
    }
    // Add user to organization's employee list
    user.pickupLocation = location
    await user.save();

    organization.employees.push(user);

    // Save changes to organization
    await organization.save();

    // Add organization to user's organization list
    user.organization = organization;

    // Save user to database
    await user.save();

    // Return success response
    res.status(201).json({ message: 'User added to organization' });
  } catch (error) {
    // Handle errors
    next(error);
  }
};

// GET /api/organizations/:id
exports.getOrganizationById = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    // Find organization by ID
    const organization = await Organization.findById(new ObjectId(id));
    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    // Return organization details
    res.json({ organization });
  } catch (error) {
    // Handle errors
    next(error);
  }
};

// POST /api/organizations/create
exports.createOrganization = async (req, res) => {
  const { userId, organizationName, organizationDescription, organizationAddress, orgTime } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newOrg = new Organization({
      admin: userId,
      name: organizationName,
      description: organizationDescription,
      address: organizationAddress,
      employees: [userId],
      orgTime: orgTime,
      minStartTime: orgTime,
    });

    await newOrg.save();

    user.organization = newOrg;
    user.isAdmin = true;
    await user.save();

    const populatedOrg = await Organization.findById(newOrg._id).populate('admin');
    // Populate admin field with the actual User document

    res.json({
      userId: user._id,
      organizationId: newOrg._id,
      name: newOrg.name,
      description: newOrg.description,
      address: newOrg.address,
      admin: populatedOrg.admin,
      employees: newOrg.employees,
      orgTime: newOrg.orgTime
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// GET /api/users/:id
exports.getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    // Find user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return user information
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      organization: user.organization,
      isAdmin: user.isAdmin
    });
  } catch (error) {
    // Handle errors
    next(error);
  }
};


// GET /api/organizations
exports.getOrganizations = async (req, res, next) => {
  try {
    // Find all organizations
    const organizations = await Organization.find();

    // Return organizations information
    res.json({ organizations });
  } catch (error) {
    // Handle errors
    next(error);
  }
};


exports.getRides = async (req, res, next) => {
  const organizationId = req.params.id;
  // console.log(organizationId);
  try {
    const organization = await Organization.findById(organizationId);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    const rides = organization.rides;
    const result = [];
    //iterate through rides array and find the ride details
    for (let i = 0; i < rides.length; i++) {
      const ride = await Ride.findById(rides[i]);
      result.push(ride);
    }
    console.log(result);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};

exports.assignRides = async (req, res, next) => {
  try {
    const { adminId } = req.body;
    const admin = await User.findById(adminId);
    if (!admin || !admin.isAdmin) {
      return res.status(400).json({ message: 'Invalid admin ID' });
    }
    // console.log(1);
    const organization = await Organization.findOne({ _id: admin.organization });
    if (!organization) {
      return res.status(400).json({ message: 'No organization found for the given admin ID' });
    }
    //delete all rides in current organization ride array
    await Ride.deleteMany({ organization: organization._id });
    organization.rides = [];
    await organization.save();
    for (let i = 0; i < organization.employees.length; i++) {
      await User.updateOne({ _id: organization.employees[i] }, { $unset: { rideAssigned: '' } });
    }
    for (let i = 0; i < organization.drivers.length; i++) {
      // const driver = await Driver.findById(organization.drivers[i]);
      // driver.ridesAssigned = [];
      // await driver.save();
      await Driver.findOneAndUpdate({ _id: organization.drivers[i] }, { $set: { ridesAssigned: [] } });
    }
    const tempEmployees = await Promise.all(organization.employees.map(async (employeeId) => {
      const employee = await User.findById(employeeId);
      return {
        id: employeeId,
        isAdmin: employee.isAdmin,
        location: employee.pickupLocation,
      };
    }));
    const employees = tempEmployees.filter((employee) => !employee.isAdmin);
    const drivers = await Promise.all(organization.drivers.map(async (driverId) => {
      const driver = await Driver.findById(driverId);
      return {
        id: driverId,
      };
    }));
    // console.log(employees);
    const result = main(employees, drivers, organization.orgTime);
    let minTime = parseInt(organization.orgTime.split(':')[0]) * 60 + parseInt(organization.orgTime.split(':')[1]);
    for (let i = 0; i < result.length; i++) {
      //find passenger by id and change pickup time
      for (let j = 0; j < result[i].passengers.length; j++) {
        // console.log(result[i].passengers[j].id);
        const passenger = await User.findById(result[i].passengers[j].id);
        passenger.pickupTime = result[i].passengers[j].time;
        await passenger.save();
      }
      // console.log(result[i].driver);
      // const driver = await Driver.findById(result[i].driver);
      // console.log(driver);
      const ride = new Ride({
        driver: result[i].driver,
        passengers: result[i].passengers.map((passenger) => passenger.id),
        organization: organization._id,
      });
      if (ride.driver === null) {
        console.log(result[i].passengers[0].time);
        const curTime = parseInt(result[i].passengers[0].time.split(':')[0]) * 60 + parseInt(result[i].passengers[0].time.split(':')[1]);
        minTime = Math.min(minTime, curTime);
      }
      // console.log(ride);
      await ride.save();
      organization.rides.push(ride._id);
      await organization.save();
      if (result[i].driver !== null) {
        const driver = await Driver.findById(result[i].driver);
        driver.ridesAssigned.push(ride._id);
        await driver.save();

      }
      for (let j = 0; j < result[i].passengers.length; j++) {
        // console.log(result[i].passengers[j].id);
        const passenger = await User.findById(result[i].passengers[j].id);
        passenger.rideAssigned = ride._id;
        await passenger.save();
        if (result[i].driver !== null) {
          const driver = await Driver.findById(result[i].driver);
          // console.log(passenger.email);
          const msg = {
            to: [{ email: passenger.email, name: passenger.name }],
            subject: 'Ride Assignment',
            htmlContent: `<p>Hi ${passenger.name},</p>
            <p>Your ride has been assigned. Please be at the pickup location at <b>${passenger.pickupLocation}</b> at <b>${passenger.pickupTime}.</b></p>
            <p>Ride Details:</p>
            <p>Driver Name: ${driver.name}</p>
            <p>Driver Phone: ${driver.phoneNo}</p>
            <p>Driver Vehicle: ${driver.licensePlate}</p>
            <p>Pickup Location: ${passenger.pickupLocation}</p>
            <p>Pickup Time: ${passenger.pickupTime}</p>
            <p>These will be your ride details till further notice.</p>
            <p>Regards,</p>
            <p>Team CarBidding</p>`,
            sender: { email: admin.email, name: admin.name },
          };
          const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
          apiInstance.sendTransacEmail(msg).then(function (data) {
            console.log('API called successfully. Returned data: ' + data);
          }, function (error) {
            console.error(error);
          });
        }
      }
    }
    //convert minTime to string HH:MM format
    let timeString = (Math.floor(minTime / 60)).toString().padStart(2, '0') + ":" + (minTime % 60).toString().padStart(2, '0');
    organization.minStartTime = timeString;
    await organization.save();
    return res.status(200).json({ message: 'Rides assigned successfully', rides: organization.rides });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

exports.getDrivers = async (req, res, next) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const organization = await Organization.findById(id);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    const result = [];
    //iterate through drivers array and find the driver details
    for (let i = 0; i < organization.drivers.length; i++) {
      const driver = await Driver.findById(organization.drivers[i]);
      result.push(driver);
    }
    // console.log(result);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
}

exports.getEmployees = async (req, res, next) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const organization = await Organization.findById(id);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    const result = [];
    //iterate through drivers array and find the driver details
    for (let i = 0; i < organization.employees.length; i++) {
      const employee = await User.findById(organization.employees[i]);
      result.push(employee);
    }
    // console.log(result);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
}
