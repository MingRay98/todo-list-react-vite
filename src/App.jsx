import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {TaskProvider} from './contexts/TaskContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;