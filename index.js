let express = require('express')
let app = express();
require('dotenv').config();

let fs = require('fs');

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.post('/notify',function(req,res){

let x = new Date();
let day = x.getDay();
let month = x.getMonth();
let year = x.getFullYear();

fs.appendFile(`${day}-${month+1}-${year}.txt`,`${x}-${JSON.stringify(req.body)}\n`,function(error,data){
    if (error) {res.json({Status:'Error'}); console.log(error)};
    console.log(`Request method:${req.method} , Request Path:${req.path} - Request IP:${req.ip}`);
    console.log("Saved");
    res.json({Status: 'Success!'});

});


});

console.log('Server listening on port 8080!');

app.listen(8080);