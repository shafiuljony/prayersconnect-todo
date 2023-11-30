import React, { useEffect } from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlinePlayCircleOutline, MdOutlineCircle } from "react-icons/md";
import { useTodoContext } from '../context';
import TodoCard from './TodoCard';
import TodoCreationCard from './TodoCreationCard';

export default function Todo() {
  const { tasks, fetchTodoData, updateTask } = useTodoContext();

  useEffect(() => {
    fetchTodoData();
  }, []);

  const moveToInProgress = (_id) => {
    updateTask(_id, 'IN-PROGRESS');
  };

  const moveToDone = (_id) => {
    updateTask(_id, 'DONE');
  };
 

  return (
    <main style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
    }}>
      <TodoTask tasks={tasks.filter(task => task.status === 'TODO')} moveToInProgress={moveToInProgress} />
      <InProgress tasks={tasks.filter(task => task.status === 'IN-PROGRESS')} moveToDone={moveToDone} />
      <Done tasks={tasks.filter(task => task.status === 'DONE')} />
    </main>
  );
}
const TodoTask = ({ tasks, moveToInProgress }) => {
  
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      padding: '0 0.5rem'
    }}>
      <h2 style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'gray',
        fontSize: '1.2rem',
        fontWeight: 'normal',
      }}>
        <MdOutlineCircle />To-do
        <span>{tasks.length}</span>
      </h2>
      <div style={{
        display: 'grid',
      }}>
        {tasks.map(task => (
          <TodoCard key={task._id} task={task} moveToInProgress={moveToInProgress} />
        ))}
      </div>
      <TodoCreationCard />
    </div>
  );
};

const InProgress = ({ tasks, moveToDone }) => {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      padding: '0 0.5rem'
    }}>
      <h2 style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'blue',
        fontSize: '1.2rem',
        fontWeight: 'normal',
      }}>
        <MdOutlinePlayCircleOutline />In Progress
        <span style={{
          color: 'gray',
        }}>{tasks.length}</span>
      </h2>
      <div style={{
        display: 'grid',
      }}>
        {tasks.map(task => (
          <TodoCard key={task._id} task={task} moveToDone={moveToDone} />
        ))}
      </div>
    </div>
  );
};

const Done = ({ tasks }) => {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      padding: '0 0.5rem'
    }}>
      <h2 style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'gray',
        fontSize: '1.2rem',
        fontWeight: 'normal',
      }}>
        <IoCheckmarkCircleOutline />Done
        <span>{tasks.length}</span>
      </h2>
      <div style={{
        display: 'grid',
      }}>
        {tasks.map(task => (
          <TodoCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};



