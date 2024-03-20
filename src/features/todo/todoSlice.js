import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  inputText: "",
  tasks: [],
  completedTasks: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const task = {
        id: nanoid(),
        text: action.payload.text,
        isDone: action.payload.isDone,
      };
      state.tasks.push(task);
      state.inputText = "";
    },
    editTodo: (state, action) => {
      state.tasks = state.tasks.map((t) =>
        t.id === action.payload.id ? { ...t, text: action.payload.text } : t
      );
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
    removeTodo: (state, action) => {
      state.completedTasks = state.completedTasks.filter(
        (t) => t.id !== action.payload.id
      );
    },
    inputTextChange: (state, action) => {
      state.inputText = action.payload.text;
    },
    checkValueChange: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (t) => t.id === action.payload.id
      );
      if (taskIndex !== -1) {
        const taskToMove = state.tasks[taskIndex];
        state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
        taskToMove.isDone = action.payload.isDone;
        state.completedTasks.push(taskToMove);
      } else {
        const completedTaskIndex = state.completedTasks.findIndex(
          (ct) => ct.id === action.payload.id
        );
        if (completedTaskIndex !== -1) {
          const completedTaskToMove = state.completedTasks[completedTaskIndex];
          state.completedTasks = state.completedTasks.filter(
            (ct) => ct.id !== action.payload.id
          );
          completedTaskToMove.isDone = action.payload.isDone;
          state.tasks.push(completedTaskToMove);
        }
      }
    },
  },
});

export const {
  addTodo,
  editTodo,
  deleteTodo,
  removeTodo,
  inputTextChange,
  checkValueChange,
} = todoSlice.actions;

export default todoSlice.reducer;
