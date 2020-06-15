  var female=["Akosua", "Adwoa", "Abenna", "Akua", "Yaa","Afua","Ama"]
   var male=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

   var week = function() {
   var year= document.getElementById("Year").value;
   var yy= parseInt(Year);
   var month= document.getElementById("Month").value;
   var mm= parseInt(Month;)
   var day= document.getElementById("Day").value;
   var dd= parseInt(Day)
   var cc= Math.floor((year-1)/100) + 1);
   var confirm= document.getElementById("btn")
  function calculate(){
 week= parseInt(((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7
 return(Math.floor(weekday))
}
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
 if (Math.floor(week == 0 )); {
 document.getElementById("display").innerHTML=( " Your name is " + male[0] + " you were born on " + " sunday");
} else if (Math.floor(week == 1 )); {
  document.getElementById("display").innerHTML=(" Your name is " + male[1] + " you were born on " + " monday");
} else if (Math.floor(weekday == 2 )); {
  document.getElementById("display").innerHTML=(" Your name is " + male[2] + " you were born on " + " tuesday");
} else if (Math.floor(weekday == 3 )); {
  document.getElementById("display").innerHTML=(" Your name is" + male[3] + " you were born on " + " wednesday");
} else if (Math.floor(weekday == 4 )); {
  document.getElementById("display").innerHTML=(" Your name is " + male[4] + " you were born on " + " thursday");
}else if (Math.floor(weekday == 5 )); {
 document.getElementById("display").innerHTML=(" Your name is " + male[5] + " you were born on " + " friday");
}else if(Math.floor(weekday == 6 ));{
  document.getElementById("display").innerHTML=(" Your name is " + male[6] + " you were born on " + " saturday");
}
break;
case "female":
 if (Math.floor(weekday == 0 ));{
document.getElementById("display").innerHTML=( " Your name is " + female[0] + " you were born on " + " sunday");
} else if (Math.floor(weekday == 1 )); {
 document.getElementById("display").innerHTML=(" Your name is " + female[1] + " you were born on " + " monday");
} else if  (Math.floor(weekday == 2 ));{
 document.getElementById("display").innerHTML=(" Your name is " + female[2] + " you were born on " + " tuesday");
} else if (Math.floor(weekday == 3 )); {
 document.getElementById("display").innerHTML=(" Your name is" + female[3] + " you were born on " + " wednesday");
} else if (Math.floor(weekday == 4 )); {
 document.getElementById("display").innerHTML=(" Your name is " + female[4] + " you were born on " + " thursday");
}else if (Math.floor(weekday == 5)) {
document.getElementById("display").innerHTML=(" Your name is " + female[5] + " you were born on " + " friday");
}else if(Math.floor(weekday ==6 ));{
 document.getElementById("display").innerHTML=(" Your name is " + female[6] + " you were born on " + " saturday");
}
else {
  document.getElementById("display").innerHTML=(" Kindly Enter valid birthday")
}
break;
default:

}
}
