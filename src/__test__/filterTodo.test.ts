import { filterTodo } from "../pages/Todos/helper";

const mockTodos = [
  { id: "1", todo: 'task1', isCompleted: true },
  { id: "2", todo: 'task2', isCompleted: false },
  { id: "3", todo: 'task3', isCompleted: true },
  { id: "4", todo: 'task4', isCompleted: false },
  { id: "5", todo: 'task5', isCompleted: true },
  { id: "6", todo: 'task6', isCompleted: false },
];

describe('filterTodo', () => {
  it('should return all todos when filter is 0 - "all"', () => {
    const result = filterTodo(0 , mockTodos);
    expect(result).toEqual(mockTodos);
  });

  it('should return only incomplete todos when filter is 1 - "active"', () => {
    const filter = 1;
    const expectedResult = mockTodos.filter((todo) => !todo.isCompleted);
    const result = filterTodo(filter, mockTodos);
    expect(result).toEqual(expectedResult);
  });

  it('should return only completed todos when filter is 2 - "completed"', () => {
    const filter = 2;
    const expectedResult = mockTodos.filter((todo) => todo.isCompleted);
    const result = filterTodo(filter, mockTodos);
    expect(result).toEqual(expectedResult);
  });
});
