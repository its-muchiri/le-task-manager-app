"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.addTask = exports.getTasks = void 0;
const axios_1 = __importDefault(require("axios"));
const api = axios_1.default.create({
    baseURL: 'http://localhost:8080', // Adjust this to your backend server address
});
const getTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield api.get('/tasks');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
});
exports.getTasks = getTasks;
const addTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield api.post('/tasks', task);
        return response.data;
    }
    catch (error) {
        console.error('Error adding task:', error);
        throw error;
    }
});
exports.addTask = addTask;
const updateTask = (id, task) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield api.put(`/tasks/${id}`, task);
        return response.data;
    }
    catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
});
exports.updateTask = updateTask;
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield api.delete(`/tasks/${id}`);
    }
    catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
});
exports.deleteTask = deleteTask;
