// //Ask the user to enter his/her name as input.
function userInformation(){
var name =prompt("Enter your name");
var gender  =prompt("Enter your gender (male or female)");
if (gender !="male" && gender != "female"){
  alert("the gender is not male or female ")
}
while(1){
    var age  =prompt("Enter your age ");
    if (age<=0){
        alert("the age is less than or equal to zero")
        continue;
    }else {
        break;
    }
}
//Ask the user to confirm if he/she wants to skip the welcoming message.
// welcame massage
var confirming =confirm("wants to skip the welcoming message")
if (confirming==0){
    switch (gender){
        case "male" :
            alert("welcame Mr."+name) ;
            break;
         case "female"   :
            alert("welcame Ms."+name) ;
            break;  
         default:
            alert("welcame "+name) ;
            break;

    }
}
}

//Phase 2 Requirements:

function job(){
  let jobQuestion =prompt("do you have a job?");
  if(jobQuestion ==""){
    return "invalid";
}else {
  return jobQuestion;
}
}
function marry(){
  let marryQuastion =prompt("Are you married?");
  if(marryQuastion ==""){
    return "invalid";
}else {
  return marryQuastion;
}
}
function children(){
  let childrenQuastion =prompt("Do You Have Children?");
  if(childrenQuastion ==""){
    return "invalid";
}else {
  return childrenQuastion;
}
}
function car(){
  let carQuastion =prompt("do you have car?");
  if(carQuastion ==""){
    return "invalid";
}else {
  return carQuastion;
}
}




function yesNoQuestions (){
  let arr=[];  
    arr.push (job())
    arr.push (marry())
    arr.push (children())
    arr.push (car())
console.log (arr)
  }
  



userInformation();
yesNoQuestions();
