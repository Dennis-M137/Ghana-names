var week=["Sunday", "Monday", "Tuesday","Wednasday", "Thursday", "Friday","Saturday"]
var female=["Akosua", "Adwoa", "Abenna", "Akua", "Yaa","Afua","Ama"]
var male=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

var weekday = function() {
 var century= document.getElementById("Century").value;
 var cc= parseInt(Century);
 var year= document.getElementById("Year").value;
 var yy= parseInt(Year);
 var month= document.getElementById("Month").value;
 var mm= parseInt(Month;)
 var day= document.getElementById("Day").value;
 var dd= parseInt(Day)
}

function calculate(){
day();
 weekday= parseInt(((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7
 return(Math.floor(weekday))
}

var display = function(){
  weekday = calculate();
}


if (document.getElementById("gender").checked ===true ){
  var gender = 'male';
  }
 else {
  var gender = 'female';
  }

if (mm < 1 || mm > 12 || mm == 2 && dd > 29) {
  alert("Enter correct month");
  }
  else if (dd < 1 || dd > 31) {
  alert("Enter correct day");
}
switch (gender) {
  case "male":
 if (Math.ceil(weekday == 0 ); {
 document.getElementById("display").innerHTML= " Your name is " + male[0] + " you were born on " + week[0]);
} else if (Math.ceil(weekday == 1 ); {
  document.getElementById("display").innerHTML=" Your name is " + male[1] + " you were born on " + week[1]);
} else if (Math.ceil(weekday == 2 ); {
  document.getElementById("display").innerHTML" Your name is " + male[2] + " you were born on " + week[2]);
} else if (Math.ceil(weekday == 3 ) {
  document.getElementById("display").innerHTML" Your name is" + male[3] + " you were born on " + week[3]);
} else if (Math.ceil(weekday == 4 ) {
  document.getElementById("display").innerHTML" Your name is " + male[4] + " you were born on " + week[4]);
}else if (Math.ceil(weekday == 5 ) {
 document.getElementById("display").innerHTML" Your name is " + male[5] + " you were born on " + week[5]);
}else if(Math.ceil(weekday == 6 );{
  document.getElementById("display").innerHTML(" Your name is " + male[6] + " you were born on " + week[6]);
}
break;
case "female":
 if (Math.ceil(weekday == 0 );{
document.getElementById("display").innerHTML= " Your name is " + female[0] + " you were born on " + week[0]);
} else if (Math.ceil(weekday == 1 ); {
 document.getElementById("display").innerHTML=" Your name is " + female[1] + " you were born on " + week[1]);
} else if  (Math.ceil(weekday == 2 );{
 document.getElementById("display").innerHTML" Your name is " + female[2] + " you were born on " + week[2]);
} else if (Math.ceil(weekday == 3 ) {
 document.getElementById("display").innerHTML" Your name is" + female[3] + " you were born on " + week[3]);
} else if (Math.ceil(weekday == 4 ) {
 document.getElementById("display").innerHTML" Your name is " + female[4] + " you were born on " + week[4]);
}else if (Math.ceil(weekday == 5) {
document.getElementById("display").innerHTML" Your name is " + female[5] + " you were born on " + week[5]);
}else if(Math.ceil(weekday ==6 );{
 document.getElementById("display").innerHTML(" Your name is " + female[6] + " you were born on " + week[6]);
}
else {
  alert("imput data please")
}
break;
default:

}
}
