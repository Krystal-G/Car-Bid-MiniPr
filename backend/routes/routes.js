const express = require("express");
const router = express.Router();
const {driverSignup,passengerSignup,login} = require("../controller/user");
const {joinDriverToOrganization, getRides,getOrganizationById ,joinUserToOrganization,getOrganizations, createOrganization, assignRides,getDrivers,getEmployees} = require("../controller/organizations");
const {getRideById,getRidesByDriverId,getRidesByUserId} = require("../controller/ride");
const auth = require("../middleware/auth");

router.route("/api/auth/signup/driver").post(driverSignup);
router.route("/api/auth/signup/user").post(passengerSignup);
router.post("/api/auth/login", login);

router.post("/api/organizations/join/driver",joinDriverToOrganization);
router.post("/api/organizations/join/user",joinUserToOrganization);
router.post("/api/organizations/create",createOrganization);
router.get("/api/organizations/:id",getOrganizationById);
router.get("/api/organizations/", getOrganizations);

router.post("/api/organizations/assignRides/",assignRides);
router.get("/api/organizations/getRides/:id",getRides);
router.get("/api/organizations/getDrivers/:id",getDrivers);
router.get("/api/organizations/getEmployees/:id",getEmployees);



router.get("/api/rides/:id",getRideById);
router.get("/api/rides/driver/:id",getRidesByDriverId);
router.get("/api/rides/user/:id",getRidesByUserId);


module.exports = router;