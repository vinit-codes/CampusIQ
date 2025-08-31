import React from 'react'
import Header from './../../Components/Common/Header.tsx';
import Sidebar from './../../Components/Common/Sidebar.tsx';


const StudentProfile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />
      <div className="flex w-full pt-16 relative justify-start">
        <Sidebar />
        <main className="flex-1 ml-0 md:ml-60 px-6 lg:px-12 py-8 animate-fadeIn">
          
        </main>
      </div>
    </div>
    
  )
}

export default StudentProfile