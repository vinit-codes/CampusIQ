import React from "react";
import Button from "./../../Components/Common/Button.tsx";
import Input from "./../../Components/Common/Input.tsx";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EAE4D5] via-[#F5F5F5] to-[#EAE4D5] p-4">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-6xl h-auto lg:h-[80vh] overflow-hidden border border-transparent hover:border-gray-200">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-48 lg:h-full overflow-hidden">
          <img
            src="./src/assets/Images/collegeCovers.png"
            alt="Background cover"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 py-8 bg-gradient-to-br from-[#FAFAFA] to-[#F2F2F2]">
          <h1 className="text-2xl lg:text-3xl font-extrabold mb-6 text-center lg:text-left text-gray-800 tracking-wide">
            Register As Student 😏
          </h1>
          <form className="space-y-5 mb-6 w-full max-w-md mx-auto">
            <Input
              id="student-id"
              title="Student ID :"
              placeHolder="Enter ID here..."
              Type="text"
            />
            <Input
              id="student-password"
              title="New Password :"
              placeHolder="Enter New Password..."
              Type="password"
            />
            <Input
              id="password"
              title="Confirm Password :"
              placeHolder="Enter Confirm Password..."
              Type="password"
            />
            <Input
              id="dob"
              title="Date of Birth :"
              placeHolder="dd/mm/yyyy"
              Type="date"
            />
            <div className="pt-4">
              <Button type = "submit" clickFun="/" nameButton="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
