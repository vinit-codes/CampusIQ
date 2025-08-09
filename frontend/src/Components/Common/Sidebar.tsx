import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { DashboardSquare02Icon, InboxDownloadIcon, Hotel01Icon, RepositoryIcon, TeacherIcon, LibrariesIcon } from '@hugeicons/core-free-icons';

const links = [
  { href: '/dashboard', icon: DashboardSquare02Icon, label: 'Dashboard' },
  { href: '/notifications', icon: InboxDownloadIcon, label: 'Inbox' },
  { href: '/academics', icon: TeacherIcon, label: 'Academics' },
  { href: '/studentsprofile', icon: RepositoryIcon, label: 'Repository' },
  { href: '/hostel', icon: Hotel01Icon, label: 'Hostel' },
  { href: '/library', icon: LibrariesIcon, label: 'Library' },
];

const Sidebar = () => {
  return (
    <aside className="w-60 h-screen bg-white shadow-lg fixed flex flex-col rounded-lg border border-gray-200 p-6">
      {links.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          className="group flex items-center gap-3 mb-5 text-gray-700 text-base font-medium rounded-md px-4 py-3 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:shadow-md cursor-pointer"
        >
          <HugeiconsIcon
            icon={icon}
            className="w-6 h-6 text-blue-500 group-hover:text-blue-700 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
          <span className="whitespace-nowrap">{label}</span>
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;
