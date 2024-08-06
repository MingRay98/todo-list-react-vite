import React from 'react';
import { render, act } from '@testing-library/react';
import { TaskProvider, useTasks } from '../contexts/TaskContext';

const TestComponent = () => {
  const { tasks, addTask, updateTask, deleteTask, toggleTask } = useTasks();

  const handleAddTask = () => {
    addTask('Test Task', 'Test Content');
  };

  const handleUpdateTask = () => {
    updateTask(tasks[0].id, { title: 'Updated Task', content: 'Updated Content' });
  };

  const handleDeleteTask = () => {
    deleteTask(tasks[0].id);
  };

  const handleToggleTask = () => {
    toggleTask(tasks[0].id);
  };

  return (
    <div>
      <span data-testid="task-count">{tasks.length}</span>
      <span data-testid="task-title">{tasks[0]?.title}</span>
      <span data-testid="task-complete">{tasks[0]?.completed.toString()}</span>
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={handleUpdateTask}>Update Task</button>
      <button onClick={handleDeleteTask}>Delete Task</button>
      <button onClick={handleToggleTask}>Toggle Task</button>
    </div>
  );
};

describe('TaskContext', () => {
  let component;

  beforeEach(() => {
    component = render(
      <TaskProvider>
        <TestComponent />
      </TaskProvider>
    );
  });

  it('should add a task', () => {
    expect(component.getByTestId('task-count').textContent).toBe('0');

    act(() => {
      component.getByText('Add Task').click();
    });

    expect(component.getByTestId('task-count').textContent).toBe('1');
  });

  it('should update a task', () => {
    act(() => {
      component.getByText('Add Task').click();
    });

    act(() => {
      component.getByText('Update Task').click();
    });

    expect(component.getByTestId('task-title').textContent).toBe('Updated Task');
  });

  it('should delete a task', () => {
    act(() => {
      component.getByText('Delete Task').click();
    });

    expect(component.getByTestId('task-count').textContent).toBe('1');
  });

  it('should toggle a task', () => {
    act(() => {
      component.getByText('Add Task').click();
    });

    act(() => {
      component.getByText('Toggle Task').click();
    });

    expect(component.getByTestId('task-complete').textContent).toBe('true');
  });
});
