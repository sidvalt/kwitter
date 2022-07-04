const firebaseConfig = {
    apiKey: "AIzaSyC4Kj3X13yPcHkjkVZpftpcFipMaTh8yt8",
    authDomain: "classtest-d6596.firebaseapp.com",
    databaseURL: "https://classtest-d6596-default-rtdb.firebaseio.com",
    projectId: "classtest-d6596",
    storageBucket: "classtest-d6596.appspot.com",
    messagingSenderId: "826067018674",
    appId: "1:826067018674:web:538dd851569d931448faab"
  };
//ADD YOUR FIREBASE LINKS
firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}