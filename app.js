// //Ask the user to enter his/her name as input.
function userInformation(){
var name =prompt("Enter your name");
var gender  =prompt("Enter your gender (male or female)");

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
function yesNoQuestions (){
  let arr=[];  
  let jobQuestion =prompt("do you have a job?");
  if(jobQuestion ==""){
arr.push("invalid")
  }else {
    arr.push (jobQuestion)
  }
  let marryQuastion =prompt("Are you married?");
  if(marryQuastion ==""){
arr.push("invalid")
  }else {
    arr.push (marryQuastion)
  }
  let childrenQuastion =prompt("Do You Have Children?");
  if(childrenQuastion ==""){
arr.push("invalid")
  }else {
    arr.push (childrenQuastion)
  }
  let carQuastion =prompt("do you have car?");
  if(carQuastion ==""){
arr.push("invalid")
  }else {
    arr.push (carQuastion)
  }
  

return arr;
}
userInformation();
console.log (yesNoQuestions());
