import React from 'react';
import styled from '@emotion/styled';
import { useTasks } from '../contexts/TaskContext';

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SearchBar = () => {
  const { setSearchTerm, setFilter, setSort, searchTerm, filter, sortBy } = useTasks();

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </Select>
      <Select value={sortBy} onChange={(e) => setSort(e.target.value)}>
        <option value="dateDesc">Newest First</option>
        <option value="dateAsc">Oldest First</option>
      </Select>
    </SearchContainer>
  );
};

export default SearchBar;