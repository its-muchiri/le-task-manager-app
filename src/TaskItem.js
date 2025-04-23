"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TaskItem = ({ task, onToggle, onDelete }) => (<li>
    <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)}/>
    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.title}
    </span>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </li>);
exports.default = TaskItem;
