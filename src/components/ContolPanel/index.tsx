import { FC } from 'react';
import styles from './styles.module.scss';
import { Filter } from '../../types';

type ControlPanelProps = {
  undone: number;
  selectedFilter: number;
  onChangeFilter: (index: Filter) => void;
  clearCompletedTodos: () => void;
};

const filtres = ['All', 'Active', 'Completed'];

export const ControlPanel: FC<ControlPanelProps> = ({
  selectedFilter,
  undone,
  onChangeFilter,
  clearCompletedTodos,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.undone}>{`${undone} items left`}</p>
      <ul className={styles.filters}>
        {filtres.map((filter, index) => (
          <li
            key={index}
            onClick={() => onChangeFilter(index as Filter)}
            className={selectedFilter === index ? styles.active : ''}>
            {filter}
          </li>
        ))}
      </ul>
      <button onClick={clearCompletedTodos} className={styles.remove}>
        Clear completed
      </button>
    </div>
  );
};
