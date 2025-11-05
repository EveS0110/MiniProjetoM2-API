// importando a biblioteca express e instanciando
const express = require('express');
const app = express();
app.use(express.json());

//definindo a porta por onde irá rodar a API
const PORT = 3000

let tarefas = [
    
    {id: 1, titulo: "estudadar JS", status: " fazer"},
    {id: 2, titulo: "praticar API", status: "em andamento"}
];

//Criando rotas
app.get('/', (req, res) =>{
    res.status(200).send("Hello word!");
});

app.get('/tarefas/:id', (req, res) =>{
    const id = req.params.id
    const tarefa = tarefas.find(t => t.id === Number(id));
    
    //não está correto

app.patch('/tarefas/:id', (req, res) =>{
    const id = req.params.id
    const status = status.find(s => s.id === Number(id));
    res.status(200).json({"status": "status"});
})


    if(!tarefa) {
        return res.status(401).json({"Tarefa não encontrada": 401});
    } else {
        res.status(200).json(tarefa);
    }
})

app.post('/tarefas', (req, res) =>{
    console.log(req.body);
    res.json({
        "statusCode": 200
    })
});

//Subindo a API
app.listen(PORT) 
    console.log("API rodando")
