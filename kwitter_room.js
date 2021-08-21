
var firebaseConfig = {
      apiKey: "AIzaSyBQrrjWOEa_nBALETBtshbB78OiOVXQjco",
      authDomain: "kwitter-454ad.firebaseapp.com",
      projectId: "kwitter-454ad",
      storageBucket: "kwitter-454ad.appspot.com",
      messagingSenderId: "701407394155",
      appId: "1:701407394155:web:2be3f6c04adfc7ec09f42e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name'+id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr></hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}