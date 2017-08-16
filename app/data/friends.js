// ===============================================================================
// DATA
// Below data will hold all of the friends questions.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },

    {
        "name":"Katie Gibson",
        "photo":"/images/random-user-imageF22.jpg",
        "scores":[
            5,
            1,
            2,
            6,
            5,
            8,
            2,
            5,
            9,
            4
        ]
    },

    {
        "name":"Anthony Collins",
        "photo":"/images/random-user-imageM45.jpg",
        "scores":[
            3,
            1,
            4,
            5,
            3,
            2,
            2,
            5,
            1,
            1
        ]
    },

    {
        "name":"Megan Johnson",
        "photo":"/images/random-user-imageF29.jpg",
        "scores":[
            1,
            2,
            4,
            5,
            3,
            5,
            2,
            5,
            5,
            1
        ]
    },

    {
        "name":"Tyler Davis",
        "photo":"/images/random-user-imageM19.jpg",
        "scores":[
            2,
            1,
            4,
            4,
            3,
            2,
            2,
            5,
            4,
            4
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
