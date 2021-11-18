//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCtFGbOR9ciNM1QKeUz_WbfmDGQmh0I3tI",
      authDomain: "kwitter-80c81.firebaseapp.com",
      databaseURL: "https://kwitter-80c81-default-rtdb.firebaseio.com",
      projectId: "kwitter-80c81",
      storageBucket: "kwitter-80c81.appspot.com",
      messagingSenderId: "282521434235",
      appId: "1:282521434235:web:dbed8de16cc4b9cf5bcade"
    };                                                                                                                                                                        
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name1_with_tag="<h4>"+name1 +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+ message +"</h4>";
button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row=name1_with_tag+message_with_tag+button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function updatelike(message_id)
{
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}