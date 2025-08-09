import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faInbox  , faGraduationCap , faBuilding , faBook , faDatabase} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faInbox, faGraduationCap, faDatabase, faBuilding, faHome , faBook);
const Sidebar = () => {
  return (
    <aside className="w-1/6 h-screen bg-[#EAE4D5] m-0 p-4 shadow-lg fixed flex flex-col mt-[2px] rounded-[5px]">
        <a href="/dashboard" className="p-3  m-2 item-center rounded-[2px] text-2xl ">
          <FontAwesomeIcon icon={faHome} className="mr-2" />Dashboard
        </a>

        <a href="/notifications" className="p-3  m-2 item-center rounded-[2px] text-2xl ">
          <FontAwesomeIcon icon={faInbox} className="mr-2" /> Inbox
        </a>

        <a href="/academics" className="p-3  m-2 item-center rounded-[2px] text-2xl">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />Academics
        </a>

        <a href="/studentsprofile" className="p-3  m-2 item-center rounded-[2px] text-2xl">
          <FontAwesomeIcon icon={faDatabase} className="mr-2" />Repository
        </a>

        <a href="/hostel" className="p-3  m-2 item-center rounded-[2px] text-2xl">
          <FontAwesomeIcon icon={faBuilding} className="mr-2" />Hostel
        </a>

        <a href="/library" className="p-3  m-2 item-center rounded-[2px] text-2xl">
          <FontAwesomeIcon icon={faBook} className="mr-2" />Library
        </a>

    </aside>
  )
}

export default Sidebar