import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard.tsx';
import Login from './Pages/Authentication/Login.tsx';
import Register from './Pages/Authentication/Register.tsx';
import RegistrationPortal from './Pages/AcademicManagement/RegistrationPortal.tsx';
import StudentProfile from './Pages/AcademicManagement/Studentprofile.tsx';
import Results from './Pages/AcademicManagement/GradesTrackers.tsx';
import Fees from './Pages/FinanceManagement/FeeManagement.tsx';
import Hostel from './Pages/Resource/HostelManagement.tsx';
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
      <Route path="ForgotPassword" element={<ForgotPassword />} />
      {/* error handleing */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRouter;