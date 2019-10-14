/*var async = require('async');
var express = require('express');


function testRun(){
	async.series([
		function (){
			console.log('do stuff regardless of response');
			setTimeout(5000){
				console.log('did stuff');
			};
		},
		function () {
			console.log ('return web response here');
		}
	], function complete(){
		//maybe dont do it like this.
		return true;
	});

}

testRun();*/


/* general express server.*/

//const app = express();
const express = require('express')
const app = express()
const port = 4567

app.get('/', (req, res) => res.send('Hello World! TEST'));
app.post('/payload', (req, res) => {
	processRespFirst(res);
	console.log('waiting 10 seconds pretending like we\'re doing stuff');
	setTimeout(function(){ console.log('Request:', req.body);
	 }, 10000);
	//
	//res.send('');
});


function processRespFirst(res){
	res.status(204);
	res.send('Worked');
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
