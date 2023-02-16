const express = require("express");
const { createClient, totalNumberClients, projectDetail } = require("../cykle.controller/cykle.controller");

const router = express.Router();
router.post("/Add-clients", createClient);
router.get("/Total-clients", totalNumberClients);
router.get("/Project-detail/:companyEmail", projectDetail);

module.exports = router;
