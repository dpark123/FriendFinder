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
        "name":"Joe",
        "photo":"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "scores":[
            1,
            3,
            4,
            5,
            3,
            2,
            2,
            4,
            1,
            4
          ]
      }
      
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;

  var compareArray = [];
  for (var i = 0; i<friendsArray.length; i++){
    compareArray.push(friendsArray[i].scores);
  }

  console.log(compareArray);

 var differenceArray = [];