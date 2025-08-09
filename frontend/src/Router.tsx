import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Register from './Pages/Authentication/Register.tsx';
import RegistrationPortal from './Pages/AcademicManagment/RegistrationPortal.tsx';
import StudentProfile from './Pages/AcademicManagment/StudentProfile.tsx';
import Results from './Pages/AcademicManagment/GradesTrackers.tsx';
import Fees from './Pages/FinanceMangment/FeeManagement.tsx';
import Hostel from './Pages/Resource/HostelManagment.tsx';
import Library from './Pages/Resource/LibrarySystem.tsx';
import ForgotPassword from './Pages/Authentication/Forgotpassword.tsx';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Authentications */}
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      {/* Students Pages */}
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Portal" element={<RegistrationPortal />} />
      <Route path="/Profile" element={<StudentProfile />} />
      <Route path="/Results" element={<Results />} />
      <Route path="/Fees" element={<Fees />} />
      <Route path="/Hostel" element={<Hostel />} />
      <Route path="/Library" element={<Library />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      {/* error handleing */}
      <Route path="/*" element={<h1 className="text-red-500">404 Not Found</h1>} />
    </Routes>
  );
};

export default AppRouter;