import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./Router";
import Header from "./Components/Common/Header";
import Loading from "./Components/Loading/loading";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faChartLine, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faChartLine, faCog);

const AppWrapper: React.FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

const App: React.FC = () => {
  const location = useLocation();
  const showHeaderPaths = [
    "/Dashboard",
    "/Portal",
    "/Profile",
    "/Results",
    "/Fees",
    "/Hostel",
    "/Library",
  ];
  const shouldShowHeader = showHeaderPaths.includes(location.pathname);

  return (
    <Loading>
      <div className="min-h-screen w-screen">
        {shouldShowHeader && <Header />}
        <AppRouter />
      </div>
    </Loading>
  );
};

export default AppWrapper;