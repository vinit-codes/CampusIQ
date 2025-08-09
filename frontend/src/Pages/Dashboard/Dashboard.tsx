import React from 'react';
import Header from './../../Components/Common/Header.tsx';
import Sidebar from './../../Components/Common/Sidebar.tsx';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />
      <div className="flex w-full pt-16 relative">
        <Sidebar />
        <main className="flex-1 flex justify-center items-center text-center px-8 py-12 animate-fadeIn">
          <h1 className="text-4xl font-extrabold">
            Welcome to the Dashboard
          </h1>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
