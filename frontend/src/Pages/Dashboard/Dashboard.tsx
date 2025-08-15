import React from 'react';
import Header from './../../Components/Common/Header.tsx';
import Sidebar from './../../Components/Common/Sidebar.tsx';
import facultyImg from '../../assets/Images/faculty.png';
import Profile from './../AcademicManagment/StudentProfile.tsx';
const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />
      <div className="flex w-full pt-16 relative justify-start">
        <Sidebar />
        <main className="flex-1 ml-0 md:ml-60 px-6 lg:px-12 py-8 animate-fadeIn">
          <div className="max-w-7xl mx-auto">

             <section className="flex justify-end h-[40vh]">

              {/* Student info */}
              <div className="bg-gray-200 rounded-lg w-1/4 h-full flex flex-col items-center">
              <Profile />
              </div>
        

              {/* Attendance */}
              <div className="bg-gray-200 rounded-lg w-1/2 h-full flex flex-col items-center ml-4 mr-4 overflow-scroll">
                <h1 className="text-[20px] font-extrabold font-inter m-1">Attendance  </h1>
                <p className="text-[16px] font-semibold mt-2">Total Classes: 30</p>
                <p className="text-[14px] text-gray-600">Classes Attended: 25</p>
                <p className="text-[14px] text-gray-600">Attendance Percentage: 83%</p>
              </div>

              {/* Faculty Information */}
              <div className="bg-gray-200 rounded-lg w-1/4 h-full flex flex-col items-center p-0 m-0">
                <h1 className="text-[20px] font-extrabold font-inter m-1">Student-Faculty Information</h1>
                <img src={facultyImg} alt="Faculty" className="h-[100px] w-[100px] rounded-full" />
                <h3 className="text-[16px] font-semibold mt-2 italic text-[#2563EB]">Dr. Emily Rodriguez</h3>
                <p className="text-[14px] text-gray-600">Professor of Computer Science</p>
                <p className="text-[14px] text-gray-600">Office Hours: Mon-Fri, 10 AM - 3 PM</p>
                <p className="text-[14px] text-gray-600">Email: xyz@school.ac.in</p>
                <p className="text-[14px] text-gray-600">Phone: +91 12345 67890</p>
                <p className="text-[14px] text-gray-600">Room No: 101, Block A</p>
              </div>

             </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
