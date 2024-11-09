import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login';

const Layout = () => {
  const { isAuthenticated,isLoading } = useAuth0();

  if (isAuthenticated|| !isLoading) {
    return (
      <div className='min-h-screen bg-gray-100'>
        <Navbar />
        <div className='flex'>
          <Sidebar />
          <main className='flex-1 p-6 max-h-screen overflow-y-scroll bg-gray-950'>
            <Outlet />
          </main>
        </div>
      </div>
    );
  } else return (<LoginButton />);
};

export default Layout;
