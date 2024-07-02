// Importando o módulo express para lidar com rotas e middlewares
const express = require('express');
var cors = require('cors')

// Inicializando a aplicação Express
const app = express();

app.use(cors())

app.use(express.json())

// Importando as rotas da aplicação
const routes = require('./routes/googleCalendarRoutes');

// Definindo a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Configurando as rotas da aplicação
app.use('/api', routes);

app.get('/', (req, res) => {
    return res.send('Api is running')
})

// Inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});