var express = require('express');
var bodyParser = require('body-parser');
var productRouter = require('./productRouter');
var ctrl = require('./ctrl');

var app = express();

app.listen(3000, function () {
    console.log('server is rnning on 3000');
});

app.get('/', function (req, res) {
    res.send("Hello Express");
});

function myMiddleware(req, res, next) {
    if (req.body.email) next();
    else res.status(400).send("Invalid request");
}



//middleware
app.use(bodyParser.json()); //im going to send json

//app.use(myMiddleware);

app.use('/', productRouter);




