const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations

// const authControllers = require("./controllers/authControllers");
const salonControllers = require("./controllers/salonControllers");
const eventControllers = require("./controllers/eventControllers");

// Import auth services for security operations
// const { hashPassword } = require("./services/auth");

// Route to get a list of items
router.get("/events", eventControllers.browse);


// Route to get a specific item by ID
router.get("/salon/:id", salonControllers.read);

// // Route to add a new item
// router.post("/salon", hashPassword, salonControllers.add);

// // Route to authentification
// router.post("/login", authControllers.login);


/* ************************************************************************* */

module.exports = router;
