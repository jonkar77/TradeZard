// components/layouts/MainLayout.tsx
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/SideBar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar >
        <div className="bg-custom-grey h-full rounded ">{children}</div>
      </Sidebar>
    </>
  );
};

export default MainLayout;
