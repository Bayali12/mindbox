import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

const initialState: Todo[] = JSON.parse(localStorage.getItem("todos")!) || [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push({...action.payload, id: uuidv4() });
      saveTodosToLocalStorage(state);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
        saveTodosToLocalStorage(state);
      }
    },
    clearCompleted: (state) => {
      state = state.filter((todo) => todo.isCompleted !== true);
      console.log(state)
      saveTodosToLocalStorage(state);
      return state;
    },
  }
})

export const { addTodo, toggleTodo, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;

const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(localStorage)
};

