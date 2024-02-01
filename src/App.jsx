// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignIn, Upload } from './components';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
};

export default App;

