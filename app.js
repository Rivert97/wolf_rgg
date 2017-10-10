// console.log('Hola mundo!', 'Wuuuu');

// var nombre = "Roberto";
// var nick = "Rivert";

// console.log(nombre, 'es', nick);
var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});