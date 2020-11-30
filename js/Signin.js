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
  let email = "anemail@yahoo.org";
  let password = "aPassword";

  // sign in 
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(success => {
    console.log("Login success");

    //optional
    let user = firebase.auth().currentUser;
    console.log(user.displayName + " " + user.email + " " + user.emailVerified)
  })
  .catch(error =>{
    let errorMessage = error.message;
    console.log(errorMessage);
  });

  
  
});