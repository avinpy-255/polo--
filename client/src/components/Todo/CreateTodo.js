import React, { useState } from 'react';

export const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  return (
    <div className="bg-lime-800 p-10 shadow-md flex justify-center flex-col ">
      <h2 className="text-xl font-bold text-lime-300 mb-2">Create New Todo</h2>
      <div className="mb-2">
        <label htmlFor="title" className="block text-sm font-medium text-lime-300">Title</label>
        <input
          type="text"
          id="title"
          className="mt-1 block w-full rounded-md bg-lime-700 border-lime-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm "
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="description" className="block text-sm  font-medium text-lime-300">Description</label>
        <textarea
          id="description"
          rows={3}
          className="mt-1 block w-full rounded-md  bg-lime-700 "
          placeholder="Enter todo description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex items-center"> 
        <input
          type="date"
          id="dueDate"
          className="mt-1 block rounded-md text-sm bg-lime-700 "
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button 
          className="ml-2 bg-green-700 hover:bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-lg"
          onClick={() => { 
            // Handle todo creation logic here (e.g., call an API)
            console.log("Todo:", { title, description, dueDate });
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};