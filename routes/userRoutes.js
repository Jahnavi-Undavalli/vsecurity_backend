const express = require("express");
const { getAllUsers, getUserById, updateUserRole } = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get("/", protect, authorizeRoles("Admin"), getAllUsers);
router.get("/:id", protect, authorizeRoles("Admin", "User"), getUserById);
router.put("/:id/role", protect, authorizeRoles("Admin"), updateUserRole);

module.exports = router;
