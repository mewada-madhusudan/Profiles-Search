var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

//set port

app.set('port',(process.env.PORT || 3000));

// set static path 
app.use(express.static(path.join(path.resolve(),'client')));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//start the server
app.listen(app.get('port'),function(){
	console.log('server has started on port : '+app.get('port'));
});