const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const salonControllers = require("./controllers/salonControllers");
const eventControllers = require("./controllers/eventControllers");
const authControllers = require("./controllers/authControllers");
const orderControllers = require("./controllers/orderControllers");

/* ************************************************************************* */


// Route to get events
router.get("/events", eventControllers.browse); // test OK


// Route to get a specific item by ID
router.get("/salon/:id", salonControllers.readById); // test OK
router.get("/order", orderControllers.read);

// Route to modify items
router.put("/salon/:id", salonControllers.editPoint); // test OK
router.put("/salon/subscription/:id", salonControllers.editSubscription);


// // Route to add a new item
router.post("/salon", salonControllers.add); // test OK


// Route to authentification
router.post("/login", authControllers.login);

/* ************************************************************************* */

module.exports = router;
