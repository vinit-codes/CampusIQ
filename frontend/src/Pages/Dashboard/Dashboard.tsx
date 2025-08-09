import React from 'react' ;
import Header from './../../Components/Common/Header.tsx';
import Sidebar from './../../Components/Common/Sidebar.tsx';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col box-border m-0 p-0">
      <Header />
      <div className="flex w-full m-0 p-0 pt-[72px] relative">
        <Sidebar />
        <div className="flex justify-center align-center text-center w-full h-[2000px] ">
          <h1 className="text-2xl font-bold text-center">Welcome to the Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard