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
    var q1 = inputData[i]["q1"];
    var value = inputData[i]["value"];
    console.log(name + " " + value);
    inputJson2[q1] = value;
  }
  //
  console.log(inputJson2);
});

// update the result in table
let ans1 = 0;
let ans2 = 0;
let ans3 = 0;
let ans4 = 0;
let ans5 = 0;


// get the data from your database and update the table

firebase
  .firestore()
  .collection("saveDisplayData")
  .onSnapshot(function(querySnapshot){
    console.log(querySnapshot.size);

    ans1 = 0;
    ans2 = 0;
    ans3 = 0;
    ans4 = 0;
    ans5 = 0;

    querySnapshot.forEach(doc => {
      console.log("test" + doc.get("choice"));
      console.log(doc.data());
      let choiceType = doc.get("choice");
      if(choiceType == "A"){
        ans1++;
        $("#ans1").html(ans1);
      }
      if(choiceType == "B"){
        ans2++;
        $("#ans2").html(ans2);
      }
      if(choiceType == "C"){
        ans3++;
        $("#ans3").html(ans3);
      }
      if(choiceType == "D"){
        ans4++;
        $("#ans4").html(ans4);
      }
      if(choiceType == "E"){
        ans5++;
        $("#ans5").html(ans5);
      }
    }); 
  });