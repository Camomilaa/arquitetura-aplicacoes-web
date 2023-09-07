require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// Configuração do body-parser
app.use(bodyParser.json());

// Conectar ao banco de dados MongoDB
mongoose.connect(`mongodb+srv://camillaunfly:${process.env.BANCO}@movies.b8quj1z.mongodb.net/Movies?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configurar as rotas
app.use('/', movieRoutes);

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
