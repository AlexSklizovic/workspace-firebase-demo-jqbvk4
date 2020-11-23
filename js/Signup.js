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

// start
console.log("Start...");

// Sign up when user clicks the button
$('#signup-form').submit(function(e){
  e.preventDefault();
  console.log("Submit button clicked.")
  
  // use the provided sign in
  // HW read the data from the form
  let email = "sklizo44@gmail.com";
  let psw = "password";
  firebase.auth().createUserWithEmailAndPassword(email, psw).then(user => {
    console.log("success");
  }).catch(error =>{
    console.log(error.code);
    console.log(error.message);
  });



});