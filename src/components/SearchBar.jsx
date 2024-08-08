import React from 'react';
import styled from '@emotion/styled';
import {useTasks} from '../contexts/TaskContext';

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  width: 90%;
  flex-wrap: wrap;
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
        <option value="uncompleted">Ongoing</option>
        <option value="completed">Done</option>
        <option value="all">All</option>
      </Select>
      <Select value={sortBy} onChange={(e) => setSort(e.target.value)}>
        <option value="dateDesc">Newest</option>
        <option value="dateAsc">Oldest</option>
      </Select>
    </SearchContainer>
  );
};

export default SearchBar;