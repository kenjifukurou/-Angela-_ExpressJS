// start server
const express = require("express");
const app = express();

app.get("/about", function(request, respond) {
  respond.send("Send Nude!");
})

app.get("/contact", function(req, res) {
  res.send("My Contact is 2345");
})

app.listen(3000, function() {
  console.log("server has started.")
})
