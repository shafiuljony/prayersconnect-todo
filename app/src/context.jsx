import React, { createContext, useContext, useState } from 'react';
import axios from './api/axios';

const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTodoData = async () => {
    try {
      const response = await axios.get('todos');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateTask = async (_id, status) => {
    try {
      await axios.put(`todos/${_id}`, { status });
      fetchTodoData();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <TodoContext.Provider value={{ tasks, fetchTodoData, updateTask }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;


