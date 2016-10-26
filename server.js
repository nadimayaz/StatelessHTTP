
var bodyParser=require("body-parser");
var express=require("express");
var app=express();

app.use(bodyParser.urlencoded({ 
	extended: true
}));
app.use(bodyParser.json());

app.get('/',function(req,res){
	res.sendFile(__dirname + '/demo.html');
});

app.get('/*',function(req,res){
	res.send(404,"Oops..page not found");
});

app.post('/message',function(req,res){	
	console.log("/message responded");
	res.send("message sent from server: " + req.body.text);
});

app.post('/x/y/z/message',function(req,res){ 
	console.log("/x/y/z/message responded");
	res.send("message sent from server: " + req.body.text);
});

app.post('/abc/message',function(req,res){
	console.log("/abc/message responded");
	res.send("message sent from server: " + req.body.text);
});

app.listen(8000,function(){
	console.log("Server is running on http://localhost:8000");
});

