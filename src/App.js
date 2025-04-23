"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const apiService_1 = require("./apiService");
const App = () => {
    const [tasks, setTasks] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetchTasks();
    }, []);
    const fetchTasks = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const fetchedTasks = yield (0, apiService_1.getTasks)();
            setTasks(fetchedTasks);
        }
        catch (error) {
            console.error('Failed to fetch tasks:', error);
        }
    });
    const handleAddTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newTask = yield (0, apiService_1.addTask)(task);
            setTasks([...tasks, newTask]);
        }
        catch (error) {
            console.error('Failed to add task:', error);
        }
    });
    const handleUpdateTask = (id, updatedTask) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updated = yield (0, apiService_1.updateTask)(id, updatedTask);
            setTasks(tasks.map(task => task.id === id ? updated : task));
        }
        catch (error) {
            console.error('Failed to update task:', error);
        }
    });
    const handleDeleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, apiService_1.deleteTask)(id);
            setTasks(tasks.filter(task => task.id !== id));
        }
        catch (error) {
            console.error('Failed to delete task:', error);
        }
    });
    // Your component rendering logic here, using the functions above for state management
    return (<div className="App">
            <h1>Task Manager</h1>
            {/* Implement your UI components here */}
        </div>);
};
exports.default = App;
