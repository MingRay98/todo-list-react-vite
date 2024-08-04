import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Sidebar from './Sidebar';

const LayoutContainer = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;