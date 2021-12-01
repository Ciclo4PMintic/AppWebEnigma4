const Inscription = require("../models/inscription");

createInscription = async (value) => {
  let inscriptionInstance = new Role(value);
  inscriptionInstance.save();
};

getInscriptions = async () => {
  values = await Inscription.find({});
  return values;
};
getInscriptionById = async (InscriptionId) => {
  value = await Inscription.findById(InscriptionId).exec();
  return value;
};

updateInscription = async (InscriptionID, Inscription) => {
  new_value = await Inscription.findByIdAndUpdate(InscriptionID, Inscription, {
    new: true,
  });
  return new_value;
};

deleteInscription = async (InscriptionID) => {
  return await Inscription.findByIdAndDelete(InscriptionID);
};

module.exports = {
  createInscription,
  getInscriptions,
  getInscriptionById,
  updateInscription,
  deleteInscription,
};
