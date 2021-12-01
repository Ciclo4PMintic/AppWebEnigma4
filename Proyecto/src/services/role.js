const Role = require("../models/role");

createRole = async (role) => {
  let roleInstance = new Role(role);
  roleInstance.save();
};

getRoles = async () => {
  roles = await Role.find({});
  return roles;
};

updateRoles = async (RoleID, Role) => {
  new_role = await Role.findByIdAndUpdate(RoleID, Role, { new: true });
  return new_role;
};

deleteRole = async (RoleID) => {
  return await Role.findByIdAndDelete(RoleId);
};

module.exports = {
  createRole,
  getRoles,
  updateRoles,
  deleteRole,
};
