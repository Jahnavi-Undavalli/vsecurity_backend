const express = require("express");
const { createRole, getAllRoles } = require("../controllers/roleController");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");

const router = express.Router();

router.post("/", protect, authorizeRoles("Admin"), createRole);
router.get("/", protect, authorizeRoles("Admin"), getAllRoles);

module.exports = router;
