import React from 'react' ;
import Header from './../../Components/Common/Header.tsx';
import Sidebar from './../../Components/Common/Sidebar.tsx';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center box-border p-4">
      <Header />
      <div className="flex w-full m-0 p-0 overflow-h">
        <Sidebar />
        <div className="flex justify-center align-center text-center w-full h-screen">
          <h1 className="text-2xl font-bold text-center">Welcome to the Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard