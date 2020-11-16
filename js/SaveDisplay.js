// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {};
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
  console.log(inputJson2);
});

// update the result in table
