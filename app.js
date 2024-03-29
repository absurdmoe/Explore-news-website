const express = require('express');
const app = express();

app.use("/", express.static(__dirname + '/'));



let port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
	res.sendFile(__dirname + '/index.html');
})


app.listen(port,(err)=>{
	if(!err){
		console.log('listening on:',port);
	}else{
		console.log('err',err);
	}
})