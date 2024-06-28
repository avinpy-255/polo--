const mongoose = require('mongoose')
const Todos = require('../dbTodo');

//getting Todos
const getTodos = async (req, res) => {
    try{
     const allTodos = await Todos.find({}).sort({ createdAt: -1 })
     res.status(200).send(allTodos)
    } catch(error) {
       res.status(400).send(error.message)
    }
}

const createTodos = async (req, res) => {
    console.log('Request body:', req.body);  // Log the request body
    const { title, completed } = req.body;

    if (!title) {
        return res.status(400).send('Title is required');
    }

    try {
        const newTodo = await Todos.create({ title, completed });
        res.status(201).send(newTodo);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


const updateTodo = async (req, res) => {
    const {id} = req.params;
    try{
    if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send(`There is todo with the id of ${id}`)
    }
    const todoId = {_id: id}
    const update = {completed: true};
    const updateTodo = await Todos.findOneAndUpdate(todoId, update);
    if(!updateTodo) {
         return res.status(404).send(`There is no todo with the id of ${id}`)
    }
    res.status(200).send(updateTodo)
    } catch(error) {
    res.status(500).send(error.message)
    }
}



const deleteTodo = async (req, res) => {
    const {id} = req.params;
    try{
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send(`There is todo with the id of ${id}`)
    }
    const deleteTodo = await Todos.findOneAndUpdate({_id: id});
    res.status(200).send(deleteTodo)
    } catch(error) {
    res.status(500).send(error.message)
    }
}



module.exports = {
    getTodos, createTodos, updateTodo, deleteTodo,
}