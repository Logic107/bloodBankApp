const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  bloodGroupDetailsContoller,
} = require("../controllers/analyticsController");

const router = express.Router();

//routes

//GET BLOOD post
router.get("/bloodGroups-post", authMiddelware, bloodGroupDetailsContoller);

module.exports = router;
