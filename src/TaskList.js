"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TaskItem_1 = __importDefault(require("./TaskItem"));
const TaskList = ({ tasks, onToggle, onDelete }) => (<ul>
    {tasks.map(task => (<TaskItem_1.default key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/>))}
  </ul>);
exports.default = TaskList;
