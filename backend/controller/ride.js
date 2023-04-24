const Organization = require('../modal/organization');
const Driver = require('../modal/driver');
const User = require('../modal/user');
const Ride = require('../modal/ride');
const mongoose = require('mongoose');

exports.getRideById = async (req, res, next) => {
    const {id } = req.params;
    // console.log(id)
    try {
        // Find ride by ID
        const ride = await Ride.findById(id);
        if (!ride) {
            return res.status(404).json({ error: 'Ride not found' });
        }
        const orgObj = await Organization.findById(ride.organization);
        const userObj = [];
        for(let i=0;i<ride.passengers.length;i++){
            userObj.push(await User.findById(ride.passengers[i]));
        }
        // Return ride details
        return res.status(200).json({ users: userObj,org: {orgName: orgObj.name,orgTime: orgObj.orgTime} });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getRidesByDriverId = async (req, res, next) => {
    const {id } = req.params;
    // console.log(id)
    try {
        // Find driver by id
        const driver = await Driver.findById(id);
        if(!driver){
            return res.status(404).json({ error: 'Driver not found' });
        }
        // Iterate through rides array of driver and find ride details
        const rides = [];
        for(let i=0;i<driver.ridesAssigned.length;i++){
            // console.log(driver.ridesAssigned[i]);
            const ride = await Ride.findById(driver.ridesAssigned[i]);
            // console.log(ride);
            const orgObj = await Organization.findById(ride.organization);
            const userObj = [];
            for(let i=0;i<ride.passengers.length;i++){
                userObj.push(await User.findById(ride.passengers[i]));
            }
            rides.push({users: userObj,org: {orgName: orgObj.name,orgTime: orgObj.orgTime}});
        }
        // Return ride details
        return res.status(200).json(rides);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getRidesByUserId = async (req, res, next) => {
    const {id} = req.params;
    // console.log(id);
    try {
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({ error: 'User not found' });
        }
        const ride = await Ride.findById(user.rideAssigned);
        if(!ride){
            return res.status(404).json({ error: 'User not assigned to any ride' });
        }
        const userObj = [];
        for(let i=0;i<ride.passengers.length;i++){
            userObj.push(await User.findById(ride.passengers[i]));
        }
        const driver = await Driver.findById(ride.driver);
        
        return res.status(200).json({driverDetails : driver,pickupLocation: user.pickupLocation,pickupTime: user.pickupTime,users: userObj});
    } catch (error) {
        // console.log(error);
        next(error);
    }
}

