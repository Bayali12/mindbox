import { FC } from 'react';
import { toggleTodo } from '../../store/todosSlice';
import { useAppDispatch } from '../../hooks';
import { Todo as TodoProps } from '../../types';

import styles from './styles.module.scss';

export const Todo: FC<TodoProps> = ({ todo, isCompleted, id }) => {
  const dispatch = useAppDispatch();

  const toggleTodoHandler = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className={styles.todoWrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={isCompleted}
        onChange={toggleTodoHandler}
      />
      <div className={styles.checkmark}></div>
      <p className={styles.todo}>{todo}</p>
    </div>
  );
};
