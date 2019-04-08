// Your apiRoutes.js file should contain two routes:
//     A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//     A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friendsData = require('../data/friends');
module.exports = function(app) {

    // route to display friends
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });


    // route to post survey results
    // this is received as the request from the client
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var newFriendScores = req.body.scores;


        var matchName = "";
        var matchPhoto = "";
        var totalDiff = 10000;
        for (let i = 0; i < friendsData.length; i++) {
            var currentCompare = 0;
            for (let j = 0; j <newFriendScores.length; j++) {
                // compare new score index with each existing score of same index
                currentCompare += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
            }
            // winner is the position of the lowest score difference
            if (currentCompare < totalDiff) {
                totalDiff = currentCompare;
                matchName = friendsData[i].name;
                matchPhoto = friendsData[i].photo;
            }
        }

        // put new friend into data storage -- do this at the end so you're not comparing you to yourself.
        friendsData.push(newFriend);

        res.json({
            status: 'OK',
            matchName: matchName,
            matchPhoto: matchPhoto
        });
    });
}




