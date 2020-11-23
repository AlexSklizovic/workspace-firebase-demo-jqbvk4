// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM_ZQNl8UVLn7XYsnqtQvTn28dmAR-ufE",
  authDomain: "grocerylist-459c5.firebaseapp.com",
  databaseURL: "https://grocerylist-459c5.firebaseio.com",
  projectId: "grocerylist-459c5",
  storageBucket: "grocerylist-459c5.appspot.com",
  messagingSenderId: "225456916152",
  appId: "1:225456916152:web:aac704f300fcc54730964d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$(".sampleSurvey input[type = 'submit']").click(function(e){
  e.preventDefault();

  // get the value of the form using serializeArray method

  let inputData = $("form").serializeArray();
  console.log(inputData);
  let inputJson2 = {};

  for (var i = 0; i < inputData.length; i++) {
    var q1 = inputdata[i]["q1"];
    var value = inputdata[i]["value"];
    //console.log(name + " " + value);
    inputJson[q1] = value;
  }
  //
  console.log(inputJson2);
});

// update the result in table
// get the data from your database and update the table

firebase
  .firestore()
  .collection("saveDisplayData")
  .onSnapshot(function(querySnapshot){
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      let choiceType = doc.data().choice;
      if(choiceType == "A"){
        
      }
      if(choiceType == "B"){

      }
      if(choiceType == "C"){

      }
      if(choiceType == "D"){

      }
    }); 
  });