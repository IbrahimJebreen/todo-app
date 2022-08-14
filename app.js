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
let x=prompt("Are you married?","yes or no");
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
 let z=prompt("Are you Arab?","yes or no");
switch(z){
  case "yes":
    arr.push(z);
    break;
    case "no":
      arr.push(z);
      break;
      default:
        arr.push("invaled");
}

let a=prompt("can you swim?","yes or no");
switch(a){
  case "yes":
    arr.push(a);
    break;
    case "no":
      arr.push(a);
      break;
      default:
        arr.push("invaled");
}


for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}

