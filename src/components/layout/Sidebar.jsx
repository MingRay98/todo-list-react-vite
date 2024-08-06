import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
  width: 25%;
  max-width: 300px;
  font-size: 18px;

  @media (max-width: 768px) {
    max-width: 200px;
    font-size: 16px;
  }
  @media (max-width: 576px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;