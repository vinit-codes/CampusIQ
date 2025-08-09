import React, { useState, useEffect } from 'react';

interface LoadingProps {
  children: React.ReactNode;
}

function Loading({ children }: LoadingProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // adjust the timeout as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 bg-opacity-95 backdrop-blur-sm flex flex-col justify-center items-center z-50">
          <div className="mb-6">
            {/* Orbit Animation */}
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-2 border-blue-200 rounded-full"></div>
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full animate-spin" 
                   style={{
                     top: '2px',
                     left: '50%',
                     marginLeft: '-8px',
                     transformOrigin: '8px 30px',
                     animationDuration: '1s'
                   }}></div>
              <div className="absolute w-3 h-3 bg-purple-500 rounded-full animate-spin" 
                   style={{
                     top: '6px',
                     left: '50%',
                     marginLeft: '-6px',
                     transformOrigin: '6px 26px',
                     animationDuration: '1.5s',
                     animationDirection: 'reverse'
                   }}></div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Loading ERP System</h3>
            <p className="text-sm text-gray-500">Please wait while we prepare everything...</p>
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-1 bg-gray-200 rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" 
                 style={{
                   animation: 'progress 1.5s ease-out forwards'
                 }}></div>
          </div>
        </div>
      ) : (
        <div className="animate-fadeIn">{children}</div>
      )}
    </div>
  );
}

export default Loading;