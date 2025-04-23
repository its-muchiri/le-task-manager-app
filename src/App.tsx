import React, { useState, useEffect } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from './apiService';
import { Task } from './types';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        }
    };

    const handleAddTask = async (task: Task) => {
        try {
            const newTask = await addTask(task);
            setTasks([...tasks, newTask]);
        } catch (error) {
            console.error('Failed to add task:', error);
        }
    };

    const handleUpdateTask = async (id: string, updatedTask: Task) => {
        try {
            const updated = await updateTask(id, updatedTask);
            setTasks(tasks.map(task => task.id === id ? updated : task));
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    const handleDeleteTask = async (id: string) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    // Your component rendering logic here, using the functions above for state management
    return (
        <div className="App">
            <h1>Task Manager</h1>
            {/* Implement your UI components here */}
        </div>
    );
};

export default App;