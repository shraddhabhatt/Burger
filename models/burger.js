// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(updateCol, updateVal, checkCol, checkVal, cb) {
    orm.updateOne("burger", updateCol, updateVal, checkCol, checkVal, function(res) {
      cb(res);
    });
  }
};
// Export the database functions for the controller (catsController.js).
module.exports = burger;