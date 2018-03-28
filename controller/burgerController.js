var express = require("express");
var router = express.Router();
// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(":::::::"+ hbsObject);
    res.render('index', hbsObject);
  });
});
router.post("/api/burgers", function(req, res) {
  if(req.body.burger_name != "")
  {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name , false], function(result) {
       res.redirect('/');
    });
  }
  else{
      res.redirect('/');
      alert("Please entry a proper burger name");
  }
});
router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne("devoured", true, "id", req.params.id, function(result) {
      res.redirect('/');
    }
  );
});
// Export routes for server.js to use.
module.exports = router;