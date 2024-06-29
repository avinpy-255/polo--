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
  const { id } = req.params;
  const { title, completed } = req.body; // Destructure updated fields

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid todo ID" });
    }

    // Create update object with only the fields to be updated
    const update = {};
    if (title) {
      update.title = title; // Update title if provided
    }
    if (completed !== undefined) { 
      update.completed = completed; // Update completed status if provided
    }

    const updatedTodo = await Todos.findByIdAndUpdate(
      id,
      update, 
      { new: true } // Return the updated document
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ error: "Internal server error" });
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