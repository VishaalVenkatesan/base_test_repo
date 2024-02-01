// Layout.jsx
import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Nav />
      <div className="w-screen h-screen ml-10 bg-gray-50">{children}</div>
    </div>
  );
};

export default Layout;


