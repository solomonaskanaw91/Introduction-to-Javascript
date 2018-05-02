//create a vart msg what will show on the page
//find the title o fthe document
var msg = '<p><b>page title: </b>' + document.title + '</p><br>';
//get the URL of the document
msg+= '<b>last URL: </b> + document.URL + '</p><br'>;
//last modificiatino date
msg+= '<b>last modified: </b> + document.lastModified + '</p><br>';



///display the msg on the page
var el = document