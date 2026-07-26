const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");
const aboutController = require("../controllers/aboutController");
const contactController = require("../controllers/contactController");
const servicesController = require("../controllers/servicesController");
const loginController = require("../controllers/loginController");

// GET routes
router.get("/", homeController.home);
router.get("/about", aboutController.about);
router.get("/contact", contactController.contact);
router.get("/services", servicesController.services);

// POST route (JWT login)
router.post("/login", loginController.login);

module.exports = router;
