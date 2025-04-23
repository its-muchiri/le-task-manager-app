import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080', // Adjust this to your backend server address
});

export const getTasks = async () => {
    try {
        const response = await api.get('/tasks');
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const addTask = async (task: any) => {
    try {
        const response = await api.post('/tasks', task);
        return response.data;
    } catch (error) {
        console.error('Error adding task:', error);
        throw error;
    }
};

export const updateTask = async (id: string, task: any) => {
    try {
        const response = await api.put(`/tasks/${id}`, task);
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};

export const deleteTask = async (id: string) => {
    try {
        await api.delete(`/tasks/${id}`);
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};