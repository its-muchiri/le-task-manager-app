import React from 'react';
import TaskItem from './TaskItem';
import { Task } from './types';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => (
  <ul>
    {tasks.map(task => (
      <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
    ))}
  </ul>
);

export default TaskList;