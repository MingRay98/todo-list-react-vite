import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Sidebar from './Sidebar';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
  width: 75%;
  overflow-y: auto;
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