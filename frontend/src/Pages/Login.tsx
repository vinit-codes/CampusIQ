
import React from "react";
import Input from './../Components/Common/Input';
import Button from "./../Components/Common/Button";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAE4D5] p-4">
      <div className="flex flex-col lg:flex-row bg-[#F2F2F2] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-6xl h-auto lg:h-[80vh] overflow-hidden hover:border-2 hover:border-gray-300">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-48 lg:h-full">
          <img 
            src="./src/assets/Images/collegeCovers.png" 
            alt="Background cover" 
            className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none" 
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 py-8">
          <h1 className="text-xl lg:text-2xl font-bold mb-6 text-center lg:text-left">
            LogIn As Student😎
          </h1>
          <form className="space-y-4 mb-6 w-full max-w-md mx-auto">
            <Input
              id="student-id"
              title="Student Id :"
              placeHolder="Enter ID here...."
              Type="text"
            />
            <Input
              id="student-password"
              title="Password :"
              placeHolder="Enter Password Here..."
              Type="password"
            />
            <div className="flex justify-between items-center">
              <a 
                href="/Register" 
                className="text-blue-500 hover:underline text-lg lg:text-xl transition-all duration-300 hover:text-blue-700"
              >Forgot Password?</a>
              <Button clickFun="/Dashboard" nameButton="Login"/>
            </div>
          </form>
          <div className="text-center mb-6">
            <p className="text-red-600 text-lg lg:text-xl">
              Didn't Register yet?{" "}
              <a 
                href="/Register" 
                className="text-blue-500 hover:underline text-lg lg:text-xl transition-all duration-300 hover:text-blue-700"
              >
                Register here
              </a>
            </p>
          </div>
          <hr className="border-gray-300 mb-6"/>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <Button clickFun="/Register" nameButton="LogIn As Faculty"/>
            <Button clickFun="/" nameButton="LogIn As Management"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
