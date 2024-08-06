import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTasks } from '../contexts/TaskContext';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  width: 90%;
  flex-shrink: 0;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 100px;
  resize: vertical;

  @media (max-width: 768px) {
    height: 125px;
  }
  @media (max-width: 576px) {
    height: 150px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addTask} = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addTask(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextArea
        placeholder="Task Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default TaskForm;