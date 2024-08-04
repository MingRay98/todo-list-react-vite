import React from 'react';
import styled from '@emotion/styled';
import { useTasks } from '../contexts/TaskContext';
import TaskItem from './TaskItem';

const TaskListContainer = styled.div`
  margin-top: 20px;
`;

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <TaskListContainer>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TaskListContainer>
  );
};

export default TaskList;