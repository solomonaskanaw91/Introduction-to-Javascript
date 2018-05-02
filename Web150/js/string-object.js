//create a string to use for the string example
var saying= 'Home sweet home';

//create a var msg display the results
//disply the length of the string

var msg = '<h2>length</h2><p>' + saying.length + '</p>';

msg+= '<h2>uppercase</h2><p>' + saying.toLowerCase() + '</p>';

msg+= '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';

//find the index of the first instance of the specified string
msg+= '<h2>first instance of specified string:</h2><p>' + saying.indexOf('ee') + '</p>';


//find the charitor with a specified index
var el = document.getElementById('info');
el.innerHTML = msg;

///find the last index with the last instance of the specifies string
//find the index of the first instance of the specified string
msg+= '<h2>last instance of specified string:</h2><p>' + saying.lastIndexOf('e') + '</p>';


