import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { DashboardSquare02Icon, InboxDownloadIcon, Hotel01Icon, RepositoryIcon, TeacherIcon, LibrariesIcon } from '@hugeicons/core-free-icons';



const Sidebar:React.FC = () => {
  return (
    <aside className="w-60 h-screen bg-white shadow-lg fixed flex flex-col rounded-lg border border-gray-200 p-6">
      <a
          href="/dashboard"
          className="group flex items-center gap-3 mb-5 text-gray-700 text-base font-medium rounded-md px-4 py-3 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:shadow-md cursor-pointer"
        >
          <HugeiconsIcon
            icon={DashboardSquare02Icon}
            className="w-6 h-6 text-blue-500 group-hover:text-blue-700 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
          <span className="whitespace-nowrap">Dashboard</span>
        </a>

        <a
          href="/notifications"
          className="group flex items-center gap-3 mb-5 text-gray-700 text-base font-medium rounded-md px-4 py-3 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:shadow-md cursor-pointer"
        >
          <HugeiconsIcon
            icon={InboxDownloadIcon}
            className="w-6 h-6 text-blue-500 group-hover:text-blue-700 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
          <span className="whitespace-nowrap">Inbox</span>
        </a>

        <details className="mb-2">
          <summary className="flex items-center justify-between gap-3 text-gray-700 text-base font-medium rounded-md px-4 py-3 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">
            <span className="flex items-center gap-3">
              <HugeiconsIcon icon={TeacherIcon} className="w-6 h-6 text-blue-500" />
              <span className="whitespace-nowrap">Academics</span>
            </span>
            <svg className="chevron w-4 h-4 text-gray-500 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd" />
            </svg>
          </summary>
          <nav className="ml-10 mt-1 flex flex-col border-l border-gray-200">
            <a href="/Portal" className="pl-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">Registration Portal</a>
            <a href="/Profile" className="pl-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">Student Profile</a>
            <a href="/Results" className="pl-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md">Grades Tracker</a>
          </nav>
        </details>

        <a
          href="/studentsprofile"
          className="group flex items-center gap-3 mb-5 text-gray-700 text-base font-medium rounded-md px-4 py-3 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:shadow-md cursor-pointer"
        >
          <HugeiconsIcon
            icon={RepositoryIcon}
            className="w-6 h-6 text-blue-500 group-hover:text-blue-700 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
          <span className="whitespace-nowrap">Repository</span>
        </a>


        <a
          href="/hostel"
          className="group flex items-center gap-3 mb-5 text-gray-700 text-base font-medium rounded-md px-4 py-3 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:shadow-md cursor-pointer"
        >
          <HugeiconsIcon
            icon={Hotel01Icon}
            className="w-6 h-6 text-blue-500 group-hover:text-blue-700 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
          <span className="whitespace-nowrap">Hostel</span>
        </a>

        <a
          href="/library"
          className="group flex items-center gap-3 mb-5 text-gray-700 text-base font-medium rounded-md px-4 py-3 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:shadow-md cursor-pointer"
        >
          <HugeiconsIcon
            icon={LibrariesIcon}
            className="w-6 h-6 text-blue-500 group-hover:text-blue-700 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
          <span className="whitespace-nowrap">Library</span>
        </a>

    </aside>
  );
};

export default Sidebar;
