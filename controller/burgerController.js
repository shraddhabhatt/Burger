var express = require("express");
var router = express.Router();
// Import the model (cat.js) to use its database functions.
var burger = require("selectAll../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/api/burger", function(req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.sleepy], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
router.put("/api/burger/:id", function(req, res) {
  burger.updateOne("devoured", true, "id", req.params.id, function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});
// Export routes for server.js to use.
module.exports = router;