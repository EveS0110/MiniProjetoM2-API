🧩 API de Gerenciamento de Tarefas

Uma API RESTful desenvolvida em Node.js com Express e Sequelize, conectada a um banco de dados MySQL, que permite criar, listar, atualizar e excluir tarefas.

🚀 Tecnologias utilizadas

Node.js – Ambiente de execução JavaScript

Express.js – Framework para criação de rotas e controle de requisições

Sequelize – ORM para manipulação do banco de dados

SQLite – Banco de dados relacional

Dotenv – Gerenciamento de variáveis de ambiente

Nodemon – Atualização automática durante o desenvolvimento

🛠️ Funcionalidades

✅ Listar todas as tarefas

➕ Criar uma nova tarefa

✏️ Atualizar uma tarefa existente

❌ Excluir uma tarefa


⚙️ Como rodar o projeto<br>
1️⃣ Clone o repositório<br>
git clone https://github.com/seu-usuario/nome-do-repositorio.git

2️⃣ Acesse a pasta do projeto<br>
cd nome-do-repositorio<br>

3️⃣ Instale as dependências<br>
npm install<br>

4️⃣ Configure o arquivo .env<br>

Crie um arquivo chamado .env na raiz do projeto e adicione suas variáveis de ambiente:<br>

DB_HOST=localhost<br>
DB_USER=root<br>
DB_PASSWORD=sua_senha<br>
DB_NAME=nome_do_banco<br>
DB_DIALECT=mysql<br>
PORT=3000<br>

5️⃣ Execute as migrações do banco (se aplicável)<br>
npx sequelize-cli db:migrate<br>

6️⃣ Inicie o servidor<br>
npm run dev<br>


A aplicação estará rodando em:<br>

http://localhost:3000<br>

🔄 Rotas da API<br>
Método	Rota	Descrição<br>
GET	/tarefas	Lista todas as tarefas<br>
POST	/tarefas	Cria uma nova tarefa<br>
PUT	/tarefas/:id	Atualiza uma tarefa existente<br>
DELETE	/tarefas/:id	Exclui uma tarefa<br>
📦 Exemplo de requisição POST /tarefas<br>
{
  "titulo": "Estudar Node.js",<br>
  "descricao": "Aprender sobre rotas e controllers",<br>
  "status": "Pendente",<br>
  "data_limite": "2025-11-15"<br>
}

🧠 Tratamento de Erros<br>

A API possui um sistema simples de tratamento de erros utilizando try/catch e mensagens de resposta padronizadas em caso de falha nas operações.<br>


👩‍💻 Autora<br>

Evely Sena<br>
Desenvolvedora em formação | 💻
🔗 LinkedIn
