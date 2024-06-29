import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import ViewTodo from './ViewTodo';

export const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/todos");
      setTodos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  const addTodo = async (e) => {
    e.preventDefault();
    if (title.length === 0) return;

    try {
      await axios.post('/todos', {
        ...todos,
        title: title,
        completed: false 
      });
      fetchData();
      setTitle('');
      console.log('addedTodo');
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(todos, "todos");

  return (
    <div>
          <div className="bg-lime-800 p-10 shadow-md flex justify-center flex-col ">
      <h2 className="text-xl font-bold text-lime-300 mb-2">Create New Todo</h2>
      <div className="mb-2">
        <label htmlFor="title" className="block text-sm font-medium text-lime-300">Task Name</label>
        <input
          type="text"
          id="title"
          className="mt-1 block w-full rounded-md bg-lime-700 border-lime-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm "
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button 
        className="ml-2 bg-green-700 hover:bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-lg"
        type='submit' onClick={addTodo}
      >
        Add Todo
      </button>
    </div>
    <ViewTodo todos={todos} fetchData={fetchData}/>
    </div>
    
  );
};
