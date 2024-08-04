import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
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
  font-size: 18px;

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