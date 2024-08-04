import React from 'react';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About This App</h1>
      <p>This is a simple todo list application built with React and Vite.</p>
    </AboutContainer>
  );
};

export default About;