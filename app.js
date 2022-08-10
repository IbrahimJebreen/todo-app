let namee = prompt("please enter your name", "name");
let gender = prompt("male or female", "gender");
if (gender != "male" && gender != "female") {
    alert("You entered the gender incorrectly");
}

let age = prompt("please enter your age", "age");
if (age <= 10) {
    alert("You entered the age incorrectly");
}

let text;
if (confirm("show the welcoming message!") == true) {
    if(gender=="male"){
        alert("Welcame Mr "+namee);
      }else if(gender=="female"){
        alert("Welcome Ms "+namee)
      }else{
        alert("You entered the gender incorrectly")
      }
} 