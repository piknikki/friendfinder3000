// var a = [1,2,4,3,2,6];
// var b = [2,4,6,1,1,6];

// var x = a.map(function(item, index) {
//     return Math.abs(item - b[index]);
//
// })


var newUserArray = []; // get this from data on survey.html

// go through current users and compare new user array to current user array,
// whatever number is lowest is the winner
for (let i = 0; i < userList.length; i++) {
    var userScoreArray = userList[i].scores; // pull the array out of the object

    // compare this array with the new user array, which creates a new array of numbers
    var differenceArray = userScoreArray.map(function(item, index) {
        return Math.abs(item - newUserArray[index]);
    })

    // sum that array and compare this number to the next number, to determine which one is lowest.
    sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }

//     keep lowest sum, and this is the winner

//    show modal of winner name and photo
}





var userList = [
{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "scores": [
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
]
},
{
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": [
    "4",
    "2",
    "5",
    "1",
    "3",
    "2",
    "2",
    "1",
    "3",
    "2"
]
},
{
    "name": "Jeremiah Scanlon",
    "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores": [
    "5",
    "2",
    "2",
    "2",
    "4",
    "1",
    "3",
    "2",
    "5",
    "5"
]
},
{
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": [
    "3",
    "3",
    "4",
    "2",
    "2",
    "1",
    "3",
    "2",
    "2",
    "3"
]
},
{
    "name": "Lou Ritter",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    "scores": [
    "4",
    "3",
    "4",
    "1",
    "5",
    "2",
    "5",
    "3",
    "1",
    "4"
]
},
{
    "name": "Jordan Biason",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": [
    "4",
    "4",
    "2",
    "3",
    "2",
    "2",
    "3",
    "2",
    "4",
    "5"
]
},
{
    "name": "Uncle Joe",
    "photo": "https://placeimg.com/640/480/any",
    "scores": [
    "1",
    "1",
    "1",
    "2",
    "3",
    "2",
    "2",
    "2",
    "5",
    "1"
]
},
{
    "name": "Amy Gemme",
    "photo": "www.google.com",
    "scores": [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "3",
    "3",
    "3"
]
}]