import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTasks } from '../contexts/TaskContext';

const TaskItemContainer = styled.div`
  background-color: ${props => props.completed ? '#e6ffe6' : '#f9f9f9'};
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const TaskTitle = styled.h3`
  margin: 0 0 5px 0;
  display: flex;
  align-items: center;
`;

const CompletionIcon = styled.span`
  color: green;
  margin-right: 5px;
`;

const TaskContent = styled.p`
  margin: 0 0 10px 0;
`;

const TaskActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

const EditArea = styled.textarea`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const EditInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask, updateTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedContent, setEditedContent] = useState(task.content);

  const handleEdit = () => {
    updateTask(task.id, { title: editedTitle, content: editedContent });
    setIsEditing(false);
  };

  return (
    <TaskItemContainer completed={task.completed}>
      {isEditing ? (
        <EditInput
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          placeholder="Task Title"
        />
      ) : (
        <TaskTitle>
          {task.completed && <CompletionIcon>✔</CompletionIcon>}
          {task.title}
        </TaskTitle>
      )}
      {isEditing ? (
        <EditArea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          placeholder="Task Content"
        />
      ) : (
        <TaskContent>{task.content}</TaskContent>
      )}
      <TaskActions>
        <div>
          <Button onClick={() => toggleTask(task.id)}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </Button>
          {isEditing ? (
            <Button onClick={handleEdit}>Save</Button>
          ) : (
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
          )}
        </div>
        <Button onClick={() => deleteTask(task.id)}>Delete</Button>
      </TaskActions>
    </TaskItemContainer>
  );
};

export default TaskItem;