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
let x=prompt("qqqqq","yes or no");
const arr=new Array();
switch(x){
  case "yes":
    arr.push(x);
    break;
    case "no":
      arr.push(x);
      break;
      default:
        arr.push("invaled");
}

console.log(arr);