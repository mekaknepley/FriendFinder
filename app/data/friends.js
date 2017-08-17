// ===============================================================================
// DATA
// Below data will hold all of the friends questions.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        "name":"Lisa Ray",
        "photo":"http://www.designskilz.com/random-users/images/imageF20.jpg",
        "scores":[
            5,
            1,
            2,
            4,
            2,
            1,
            2,
            2,
            2,
            1
        ]
    },

    {
        "name":"Katie Gibson",
        "photo":"http://www.designskilz.com/random-users/images/imageF29.jpg",
        "scores":[
            5,
            4,
            4,
            3,
            5,
            5,
            4,
            5,
            1,
            4
        ]
    },

    {
        "name":"Anthony Collins",
        "photo":"http://www.designskilz.com/random-users/images/imageM10.jpg",
        "scores":[
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    },

    {
        "name":"Megan Johnson",
        "photo":"http://www.designskilz.com/random-users/images/imageF32.jpg",
        "scores":[
            1,
            2,
            2,
            5,
            2,
            2,
            2,
            5,
            5,
            1
        ]
    },

    {
        "name":"Tyler Davis",
        "photo":"http://www.designskilz.com/random-users/images/imageM8.jpg",
        "scores":[
            3,
            3,
            2,
            3,
            3,
            3,
            2,
            3,
            3,
            3
        ]
    },

    {
        "name":"Jackie Todd",
        "photo":"http://www.designskilz.com/random-users/images/imageF48.jpg",
        "scores":[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;


