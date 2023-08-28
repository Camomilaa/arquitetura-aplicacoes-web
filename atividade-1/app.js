var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');

consign()
  .include('atividade-1/src/routes')
  .then('atividade-1/src/models')
  .then('atividade-1/src/controllers')
  .into(app);

app.listen(3000, function(){
  console.log('APP rodando na porta 3000: http://localhost:3000 ');
});