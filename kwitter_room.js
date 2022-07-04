
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDSqrTg-VXq3GshFJmCcBZBm1VrtKlIA-8",
      authDomain: "kwitter-eeaf9.firebaseapp.com",
      databaseURL: "https://kwitter-eeaf9-default-rtdb.firebaseio.com",
      projectId: "kwitter-eeaf9",
      storageBucket: "kwitter-eeaf9.appspot.com",
      messagingSenderId: "29084728250",
      appId: "1:29084728250:web:0679a229b2566dc03c7b83"
    };
    firebase.initializeApp(config);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
    function addRoom()
    {
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row="<div class='room_name' id= " + Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      //End code 
      document.getElementById("output").innerHTML +=row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name); 
      localStorage.setItem("room_name",name );
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="inner.html";
}
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value= "";
}