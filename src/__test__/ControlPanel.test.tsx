import { fireEvent, render } from '@testing-library/react';
import { ControlPanel } from '../components/ContolPanel';
import '@testing-library/jest-dom';

describe('ControlPanel', () => {
  it('renders correctly', () => {
    const { getByText, getByRole } = render(
      <ControlPanel
        selectedFilter={0}
        undone={5}
        onChangeFilter={jest.fn()}
        clearCompletedTodos={jest.fn()}
      />,
    );

    expect(getByText('5 items left')).toBeInTheDocument();
    expect(getByText('All')).toBeInTheDocument();
    expect(getByText('Active')).toBeInTheDocument();
    expect(getByText('Completed')).toBeInTheDocument();
    expect(
      getByRole('button', { name: 'Clear completed' }),
    ).toBeInTheDocument();
  });

  it('calls onChangeFilter when a filter is clicked', () => {
    const onChangeFilter = jest.fn();
    const { getByText } = render(
      <ControlPanel
        selectedFilter={0}
        undone={5}
        onChangeFilter={onChangeFilter}
        clearCompletedTodos={jest.fn()}
      />,
    );

    fireEvent.click(getByText('Completed'));
    expect(onChangeFilter).toHaveBeenCalledTimes(1);
    expect(onChangeFilter).toHaveBeenCalledWith(2);
  });

  it('calls clearCompletedTodos when the clearCompleted button is clicked', () => {
    const clearCompletedTodos = jest.fn();
    const { getByRole } = render(
      <ControlPanel
        selectedFilter={0}
        undone={5}
        onChangeFilter={jest.fn()}
        clearCompletedTodos={clearCompletedTodos}
      />,
    );

    fireEvent.click(getByRole('button', { name: 'Clear completed' }));
    expect(clearCompletedTodos).toHaveBeenCalledTimes(1);
  });
});
