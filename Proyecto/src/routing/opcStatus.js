const router = require("express").Router();
const statusService = require("../services/opcStatus");

router.post("/", async (req, res) => {
  let newStatus = await statusService.createInscription(req.body);
  return res.status(201).json({ newstatus });
});

router.get("/", async (req, res) => {
  let values = await statusService.getStatus();
  return res.status(200).json({ values });
});
router.get("/:id", async (req, res) => {
  let value = await inscriptionService.getInscriptionById(req.params.id);
  return res.status(200).json({ value });
});

router.put("/:id", async (req, res) => {
  let value = await inscriptionService.updateInscription(
    (InscriptionId = req.params.id),
    (Incription = req.body)
  );
  return res.status(200).json({ value });
});

router.delete("/:id", async (req, res) => {
  await inscriptionService.deleteInscription(req.params.id);
  return res.status(204).json({});
});

module.exports = router;
