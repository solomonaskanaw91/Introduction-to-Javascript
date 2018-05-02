   //first javascript example 
   //declare a variable Object
    var today = new Date();
    var hourNow = today.getHours; //get current hour assigned to the new variable getHours...In the in class example she used four variables.So the the var hourNow is the in global function that will get the current time in the time zone.So the var hourNow will have the today.getHours
    var greeting;///this the the variable that will go through the conditional if,else if, else
 //now going through the - if,else if,else
 //display greeting
  if (hourNow > 18) {
        greeting = "Good evening!";
  } else if (hourNow >= 12){
      greeting = "Good afternoon!";
      
  } else if (hourNow >0){
        greeting = "Good morning!";
                        
  }else {
      greeting = "Welcome!";
  }
document.write(greeting);

   
  
