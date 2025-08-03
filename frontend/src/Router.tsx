
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";


const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Authentications */}
      <Route path="/" element={<Login />} />
      {/* <Route path="/Register" element={<Register />} /> */}
      {/* Students Pages */}
      {/* <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Portal" element={<RegistrationPortal />} />
      <Route path="/Profile" element={<StudentsProfile />} />
      <Route path="/Results" element={<Results />} />
      <Route path="/Fees" element={<Fees />} /> */}
    </Routes>
  );
};

export default AppRouter;
