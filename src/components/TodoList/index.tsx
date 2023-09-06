import { FC } from 'react';
import { Todo } from '../../types';
import { Todo as TodoComponent } from '../Todo';

import styles from './styles.module.scss';

type TodoListProps = {
  todos: Todo[];
};

export const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <TodoComponent
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
};
