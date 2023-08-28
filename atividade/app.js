var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', 'atividade/src/views');

consign()
  .include('atividade/src/routes')
  .then('atividade/src/models')
  .then('atividade/src/controllers')
  .into(app);

app.listen(3000, function(){
  console.log('APP rodando na porta 3000: http://localhost:3000 ');
});