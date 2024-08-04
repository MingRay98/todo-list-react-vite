import React from 'react';
import styled from '@emotion/styled';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar />
      <TaskList />
    </HomeContainer>
  );
};

export default Home;