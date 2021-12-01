const Status = require("../models/opcState");

createStatus = async (value) => {
  let statusInstance = new Role(value);
  statusInstance.save();
};

getStatus = async () => {
  values = await Status.find({});
  return values;
};

updateStatus = async (StatusID, Status) => {
  new_value = await Status.findByIdAndUpdate(StatusID, Status, {
    new: true,
  });
  return new_value;
};

deleteStatus = async (StatusID) => {
  return await Status.findByIdAndDelete(StatusID);
};

module.exports = {
  createStatus,
  getStatus,
  updateStatus,
  deleteStatus,
};
