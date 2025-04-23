import React, { useState } from 'react';
import { Task } from './types';

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      onAddTask({ id: Date.now().toString(), title, completed: false });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="New task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;