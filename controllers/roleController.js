const Role = require("../models/roleModel");

// Create a new role
exports.createRole = async (req, res) => {
    try {
        const { name, permissions } = req.body;
        const role = new Role({ name, permissions });
        await role.save();
        res.status(201).json({ message: "Role created successfully", role });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all roles
exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
