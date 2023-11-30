import { useState } from "react";
import { useTodoContext } from "../context";
import Button from "./ui/Button";
import axios from "../api/axios";

export default function TodoCreationCard(){
    const { fetchTodoData } = useTodoContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleAddTodo = async () => {
      try {
        const newTaskData = {
          title: title.trim() || 'New Task',
          description: description.trim() || 'Description',
          status: 'TODO',
        };
  
        const response = await axios.post('todos', newTaskData);
        console.log('New task added:', response.data);
        await fetchTodoData(); 
        setTitle('');
        setDescription('');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    };
  
    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        marginTop: '1rem',
        padding: '5px',
        boxShadow: '0 0 5px rgba(0,0,0,0.3)',
      }}>
        <h2 style={{
          color: 'black',
        }}>Create New Todo</h2>
        <input
        style={{
          width: '90%',
          padding: '0.5rem',
          marginBottom: '0.5rem',
        }}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        style={{
          width: '90%',
          padding: '0.5rem',
          marginBottom: '0.5rem',
        }}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <Button text="Add Todo" handleClick={handleAddTodo} />
      </div>
    );
  };