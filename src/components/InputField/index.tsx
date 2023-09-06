import { FC, useState } from 'react';
import { addTodo } from '../../store/todosSlice';
import { useAppDispatch } from '../../hooks';
import addIcon from '../../assets/add.svg';

import styles from './styles.module.scss';

type InputFieldProps = {
  placeholder?: string;
};

export const InputField: FC<InputFieldProps> = ({ placeholder }) => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState('');

  const handleClickAddBtn = () => {
    dispatch(addTodo({ todo: todo, isCompleted: false }));
    setTodo('');
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder={placeholder}
      />
      {todo && (
        <button onClick={handleClickAddBtn} className={styles.addBtn}>
          <img src={addIcon} alt="add" />
        </button>
      )}
    </div>
  );
};
