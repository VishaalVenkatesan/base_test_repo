import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logoup } from '../assets';

const Nav = ({ children }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div>
      <div className="flex-col flex-1 hidden list-none bg-white sm:flex">
        <div className="mt-[26px] ml-[26px] flex flex-row">
          <img src={logoup} alt="logo" className="" />
          <div className="text-slate-950 text-2xl font-medium font-['Nunito'] ml-[15px] mt-[4px]">Base</div>
        </div>
        <ul className='flex flex-col mt-[40px] ml-[26px] space-y-10 text-zinc-400 text-base font-semibold font-Nunito'>
          <li>
            <Link to="/dashboard" onClick={() => handleLinkClick('/dashboard')} className={activeLink === '/dashboard' ? 'text-indigo-500' : ''}>Dashboard</Link>
          </li>
          <li>
            <Link to="/upload" onClick={() => handleLinkClick('/upload')} className={activeLink === '/upload' ? 'text-indigo-500' : ''}>Upload</Link>
          </li>
          <li>
            <Link to="/invoice" onClick={() => handleLinkClick('/invoice')} className={activeLink === '/invoice' ? 'text-indigo-500' : ''}>Invoice</Link>
          </li>
          <li>
            <Link to="/schedule" onClick={() => handleLinkClick('/schedule')} className={activeLink === '/schedule' ? 'text-indigo-500' : ''}>Schedule</Link>
          </li>
          <li>
            <Link to="/calendar" onClick={() => handleLinkClick('/calendar')} className={activeLink === '/calendar' ? 'text-indigo-500' : ''}>Calendar</Link>
          </li>
          <li>
            <Link to="/notification" onClick={() => handleLinkClick('/notification')} className={activeLink === '/notification' ? 'text-indigo-500' : ''}>Notification</Link>
          </li>
          <li>
            <Link to="/settings" onClick={() => handleLinkClick('/settings')} className={activeLink === '/settings' ? 'text-indigo-500' : ''}>Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
