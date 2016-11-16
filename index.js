var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');




var app = module.exports = express();


app.set('db', massive.connectSync({
	connectionString: 'postgres://postgres:test123@localhost/test',
}));
var ctrl = require('./controller');


app.use(bodyParser.json());
app.use(cors());


/*
db.new_plane(function(err, planes){
	console.log(err, "plane added")
});
*/

app.get('/planes', ctrl.getPlanes);


app.listen('3000', function () {
	console.log("Successfully listening on : 3000")
});

