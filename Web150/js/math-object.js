//create the variable to hold a random number between 1-10.
var randomNum = Math.floor(Math.random() * 10 + 1);

//display the result
var el = document.getElementById('info');
el.innerHTML = '<h2>random number: </h2><p> '+ randonNum + '</p>';