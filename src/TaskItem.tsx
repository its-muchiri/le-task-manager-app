import React from 'react';
import { Task } from './types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
  <li>
    <input 
      type="checkbox" 
      checked={task.completed} 
      onChange={() => onToggle(task.id)} 
    />
    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.title}
    </span>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </li>
);

export default TaskItem;