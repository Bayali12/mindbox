import { useCallback } from 'react';
import { ControlPanel } from '../../components/ContolPanel';
import { InputField } from '../../components/InputField';
import { TodoList } from '../../components/TodoList';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFilter } from '../../store/filterSlice';
import { clearCompleted } from '../../store/todosSlice';
import { Filter } from '../../types';

import styles from './styles.module.scss';
import { filterTodo } from './helper';

export const Todos = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  const undone = todos.filter((todo) => todo.isCompleted !== true).length;
  const filter = useAppSelector((state) => state.filter);

  const fiteredTodos = filterTodo(filter, todos);

  const onChangeFilter = useCallback((index: Filter) => {
    dispatch(changeFilter(index));
  }, []);

  const clearCompletedTodos = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <InputField placeholder="What needs to be done?" />
        <TodoList todos={fiteredTodos} />
        <ControlPanel
          selectedFilter={filter}
          undone={undone}
          onChangeFilter={onChangeFilter}
          clearCompletedTodos={clearCompletedTodos}
        />
      </div>
    </div>
  );
};
