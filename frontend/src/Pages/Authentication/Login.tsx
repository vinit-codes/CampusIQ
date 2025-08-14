import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./../../Components/Common/Input.tsx";
import coverImg from "./../../assets/Images/collegeCovers.png";
import Button from './../../Components/Common/Button.tsx';


const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Replace with real validation/auth logic
    // quick stub to simulate successful login
    navigate("/Dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-4">
      <main className="w-full max-w-6xl">
        <section className="flex flex-col lg:flex-row rounded-lg shadow-lg transition-shadow duration-300 overflow-hidden hover:shadow-xl">

          {/* Image column */}
          <div className="w-full lg:w-1/2 h-52 lg:h-[80vh] relative">
            <img
              src={coverImg}
              alt="College cover"
              className="w-full h-full object-cover"
            />
            {/* subtle gradient overlay for better text contrast on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Form column */}
          <aside className="w-full lg:w-1/2 bg-[#F8FAFC] flex flex-col justify-center px-6 lg:px-12 py-8">
            <h1 className="text-2xl lg:text-3xl font-extrabold mb-4 text-[#1E293B] text-center lg:text-left">
              Log In as Student <span aria-hidden>😎</span>
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 mb-6 w-full max-w-md mx-auto" aria-label="student login form">
              <Input
                id="student-id"
                title="Student ID"
                placeHolder="Enter ID here..."
                Type="text"
              />

              <Input
                id="student-password"
                title="Password"
                placeHolder="Enter password..."
                Type="password"
              />

              <div className="flex justify-between items-center">
                <Link to="/forgot" className="text-[#2563EB] hover:text-[#0EA5E9] hover:underline text-lg transition-all duration-200">
                  Forgot Password?
                </Link>

                <Button
                  clickFun="/dashboard"
                  nameButton="Log In"
                  type="submit"
                />
              </div>
            </form>

            <div className="text-center mb-6">
              <p className="text-[#1E293B] text-lg">
                Don't have an account?{' '}
                <Link to="/register" className="text-[#2563EB] hover:text-[#0EA5E9] hover:underline">
                  Register here
                </Link>
              </p>
            </div>

            <hr className="border-[#E6EEF9] mb-6" />

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <Link to="/faculty-login" className="w-full sm:w-auto text-center px-6 py-2 border rounded-lg hover:bg-[#F8FAFC] transition-all duration-200 border-gray-300">
                Log In as Faculty
              </Link>

              <Link to="/management-login" className="w-full sm:w-auto text-center px-6 py-2 bg-[#F59E0B] hover:bg-[#d97706] text-white rounded-lg transition-all duration-200">
                Log In as Management
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Login;
