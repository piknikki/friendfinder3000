const express = require('express');
const bodyParser = require("body-parser"); // parse the data from the form
const path = require('path');
var PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true })) // for getting info from html form
app.use(express.static(path.join(__dirname, '/app/public')));
app.use(bodyParser.json({ type: "application/vnd.api+json" }))

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



app.listen(PORT, function() {
    console.log("server is running on port 3000")
});





















// build up the html to display the match and then send it as html
// app.get("/api/results", function(req, res) {
//     var html = "<h1> Your Closest (most awkward) Match </h1>";
//     html += "<h2> Name: " + friendsData[winnerPosition].name + "</h2>";
//     html += "<img src=" + friendsData[winnerPosition].photo + ">";
//     res.send(html);
// })


// // var a = [1,2,4,3,2,6];
// // var b = [2,4,6,1,1,6];
//
// // var x = a.map(function(item, index) {
// //     return Math.abs(item - b[index]);
// //
// // })
//
//
// var newUserArray = []; // get this from data on survey.html
//
// // compare this array with the new user array, which creates a new array of numbers
// // ***this returns a new array***
// var differenceArray = newFriend.scores.map(function(item, index) {
//     return Math.abs(item - newFriend.scores[index]);
// })
//
// // sum that array and compare this number to the next number, to determine which one is lowest.
// // put it into an array??
// sum = 0;
// for (let i = 0; i < differenceArray.length; i++) {
//     sum += differenceArray[i];
//     return sum
// }


