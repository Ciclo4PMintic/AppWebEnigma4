const router = require("express").Router();
const roleService = require("../services/role");

router.post("/", async (req, res) => {
  let new_role = await roleService.createRole(req.body);
  return res.status(201).json({ new_role });
});

router.get("/", async (req, res) => {
  let roles = await roleService.getRoles();
  return res.status(200).json({ roles });
});

router.put("/:id", async (req, res) => {
  let new_role = await roleService.updateRoles(
    (RoleId = req.params.id),
    (Role = req.body)
  );
  return res.status(200).json({ new_role });
});

router.delete("/:id", async (req, res) => {
  await roleService.deleteRole(req.params.id);
  return res.status(204).json({});
});

module.exports = router;
