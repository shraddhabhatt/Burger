var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "l1wq94nfikr1ga4y",
  password: "zvxmm2li6x0emzgd",
  database: "r65zc45nwwofhy92"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
