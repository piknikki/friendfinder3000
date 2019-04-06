const express = require('express');
const bodyParser = require("body-parser"); // parse the data in form
const path = require('path');
var PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true})) // for getting info from html form
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + "/public/home.html"))
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/survey.html"));
});

app.post("/survey", function(req, res) {
    var userResponse = req.body.submit;

    console.log(userResponse);

});



app.listen(PORT, function() {
    console.log("server is running on port 3000")
});