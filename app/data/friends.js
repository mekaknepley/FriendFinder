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
        "photo":"http://www.designskilz.com/random-users/images/imageF29.jpg",
        "scores":[
            5,
            1,
            2,
            3,
            5,
            5,
            2,
            5,
            1,
            4
        ]
    },

    {
        "name":"Anthony Collins",
        "photo":"http://www.designskilz.com/random-users/images/imageF29.jpg",
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
        "photo":"http://www.designskilz.com/random-users/images/imageF29.jpg",
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
        "photo":"http://www.designskilz.com/random-users/images/imageF29.jpg",
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
