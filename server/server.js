const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const dotenv = require('dotenv');

dotenv.config()

const {
   getTodos, createTodos, updateTodo, deleteTodo,
} = require('./Controllers/todoController.js');


//App COnfig
const app = express();

const port = process.env.PORT || 8000;

const connectionURL = process.env.MONGO_URI


//Convert to json

app.use(express.json());
app.use(Cors());


//DB Connection
mongoose.connect(connectionURL)
.then(() => {
    app.listen(port, () => console.log(`Running on port: ${port}`));
})
.catch((err) => {
    console.log(err);
})    

//API Connection
//Get todo list
app.get('/todos', getTodos)
//Create a Todo
app.post('/todos', createTodos)
//Update a todo
app.put('/todos/:id', updateTodo)
//delete a todo
app.delete('/todos/:id', deleteTodo)