// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAjBw5AL_ZlF7u8_QLudQ99c12VnwTISDg",
      authDomain: "cuckoo-c8bd9.firebaseapp.com",
      databaseURL: "https://cuckoo-c8bd9-default-rtdb.firebaseio.com",
      projectId: "cuckoo-c8bd9",
      storageBucket: "cuckoo-c8bd9.appspot.com",
      messagingSenderId: "526418249552",
      appId: "1:526418249552:web:7a054e5fce7b2cacec4e55"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html"
}

function redirectToRoomName(name){
  console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}