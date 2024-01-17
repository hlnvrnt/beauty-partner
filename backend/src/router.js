const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const salonControllers = require("./controllers/salonControllers");
const eventControllers = require("./controllers/eventControllers");

// Route to get events
router.get("/events", eventControllers.browse); // test OK

// Route to get a specific item by ID
router.get("/salon/:id", salonControllers.readById); // test OK
router.post("/salon", salonControllers.add); // test OK
router.put("/salon/:id", salonControllers.editPoint); // test OK
router.put("/salon/subscription/:id", salonControllers.editSubscription);

/* ************************************************************************* */
// Import itemControllers module for handling item-related operations
// const authControllers = require("./controllers/authControllers");

// Import auth services for security operations
// const { hashPassword } = require("./services/auth");

// // Route to add a new item
// router.post("/salon", hashPassword, salonControllers.add);

// // Route to authentification
// router.post("/login", authControllers.login);

/* ************************************************************************* */

module.exports = router;
