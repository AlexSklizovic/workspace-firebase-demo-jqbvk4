// How to connect to firebase
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

$("#Login").submit(function(e){
  e.preventDefault();

  // Get username(email) and password from form
  let theData = $("form").serializeArray();
  console.log(theData);
  let inputJson3 = {};

  for(let i = 0; i < theData.length; i++){
    let logName = theData[i]["name"];
    let logVal = theData[i]["value"];
    console.log("LogName: " + logName + " " + logVal);
    inputJson3[name] = logVal; 
  }

  console.log("Login Name: " + inputJson3["login"]);

  let email2 = inputJson3["login"];
  let password2 = inputJson3["pwd"]

  // sign in 
  firebase.auth().signInWithEmailAndPassword(email2, password2)
  .then(success => {
    console.log("Login success");

    //optional
    let user = firebase.auth().currentUser;
    console.log("works " + user.displayName + " " + user.email + " " + user.emailVerified)
  })
  .catch(error =>{
    let errorMessage = error.message;
    console.log(errorMessage);
  }); 

});