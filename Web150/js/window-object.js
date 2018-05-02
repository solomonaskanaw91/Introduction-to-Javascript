///create a var msg on the page
var msg = '<h2>browser window</h2><p>widht: ' + 
    window.innerWidth + '<p>';
//find the height of the window and add to msg
msg += '<p>height: ' + window.innerHeight + '<p>';

//find the number of items in the browser history.
msg +='<h2>history</h2><p>items: ' +  window.history.length + '<p>';

//create a variable el to add the message to.
var el= document.getElementById('info');
el.innerHTML = msg;// innerHTML allows html tag formatting


//find the lolocation of the page
alert("Current page: " + window.location);