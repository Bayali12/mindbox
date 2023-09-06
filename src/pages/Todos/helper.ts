import { Filter, Todo } from '../../types';

export const filterTodo = (filter: Filter, todos: Todo[]) =>
  filter === 0
    ? todos
    : filter === 1
    ? todos.filter((todo) => todo.isCompleted !== true)
    : todos.filter((todo) => todo.isCompleted === true);
