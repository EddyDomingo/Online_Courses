
// $(document).ready(function () {
//     $("#formButton").click(function(){
//         $("#form1").toggle();
//     })

// });

$(document).ready(function () {
  $("#formButton1").click(function(){
      $("#form2").toggle();
  })

  $("#formButton").click(function(){
     $("#form1").toggle();
    })

});



document.getElementById("btngreen").onclick = function(){funcGreen()}
document.getElementById("btnblue").onclick = function(){funcBlue()}
document.getElementById("btnred").onclick = function(){funcRed()}
document.getElementById("btnpurple").onclick = function(){funcPurple()}
document.getElementById("btnyellow").onclick = function(){funcYellow()}
document.getElementById("formButton1").onclick = function(){funcEnroll()}

function funcGreen(){

    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("Course-1", "Applied-Arts");
        
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }

}

function funcBlue(){

    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("Course-2", "Master Business Administration");
        
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
    
}

function funcRed(){

    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("Course-3", "Master Computer Science");
        
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
    
}

function funcPurple(){

    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("Course-4", "Master Engineer");
        
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
    
}

function funcYellow(){

    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("Course-5", "UX-Design");
        
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
   
    
}

function funcUser(){
    
    const fname = document.getElementById("fname").value
    const lname = document.getElementById("lname").value 
    const email = document.getElementById("email").value
    const form = document.getElementById("form1");
    var text = "";
    var i;
    for (i = 0; i < form.length ;i++) {
        text += form.elements[i].value + "<br>";
      }
    var user = text.replace(/\<br\>/g," ");
    var userSplit = user.split(" ");
    console.log(userSplit[0]);
    console.log(userSplit[1]);
    console.log(userSplit[2]);

    if (typeof(Storage) !== "undefined") {
    // Store
        localStorage.setItem("User Information", userSplit);
        
       } else {
         document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
       }
   
    
}

function funcEnroll(){

  
     var course1 = localStorage.getItem("Course-1");
     var course2 = localStorage.getItem("Course-2");
     var course3 = localStorage.getItem("Course-3");
     var course4 = localStorage.getItem("Course-4");
     var course5 = localStorage.getItem("Course-5");
     console.log(typeof(course1));
     console.log("Hello World");



     var node = document.createElement("LI");
     var textnode = document.createTextNode(course1);
     node.appendChild(textnode);
     document.getElementById("myList").appendChild(node);

     var node2 = document.createElement("LI");
     var textnode2 = document.createTextNode(course2);
     node2.appendChild(textnode2);
     document.getElementById("myList").appendChild(node2);

     var node3 = document.createElement("LI");
     var textnode3 = document.createTextNode(course3);
     node3.appendChild(textnode3);
     document.getElementById("myList").appendChild(node3);

     var node4 = document.createElement("LI");
     var textnode4 = document.createTextNode(course4);
     node4.appendChild(textnode4);
     document.getElementById("myList").appendChild(node4);

    var node5 = document.createElement("LI");
     var textnode5 = document.createTextNode(course5);
     node5.appendChild(textnode5);
     document.getElementById("myList").appendChild(node5);

 }

