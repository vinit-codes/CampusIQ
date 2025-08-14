import React from 'react';
import Header from './../../Components/Common/Header.tsx';
import Sidebar from './../../Components/Common/Sidebar.tsx';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />
      <div className="flex w-full pt-16 relative justify-start">
        <Sidebar />
        <main className="flex-1 ml-0 md:ml-60 px-6 lg:px-12 py-8 animate-fadeIn">
          <div className="max-w-7xl mx-auto">
             <section className="flex h-[35vh]">
              <div className="bg-gray-100 rounded-lg w-[350px] h-full flex justify-center item-center">
                <h1 className="text-[20px] font-extrabold font-inter m-[4px]">Student-Faculty Information</h1>
                
                <img src='""' className=""/>
              </div>
             </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
