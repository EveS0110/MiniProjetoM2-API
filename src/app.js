// importando a bibliotecas e instanciando express 
const express = require('express');
const sequelize = require('../config/database.js');
const tarefaRoutes = require('./routes/tarefaRoutes.js');
const app = express();
app.use(express.json());

//definindo a porta por onde irá rodar a API
const PORT = 3000

//chamando rotas e métodos GET,POST,PUT,DELETE
app.use('/tarefas', tarefaRoutes)

//Criando rotas
app.get('/', (req, res) =>{
    res.status(200).send("Hello word!");
});

sequelize.sync({ alter: true }).then(() => {
  console.log('Banco sincronizado!');
})
//Subindo a API
app.listen(PORT) 
    console.log("API rodando")
