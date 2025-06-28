import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCampground,
  FaRegCalendarAlt,
  FaUserCircle,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-60 h-screen bg-[#5B3A29] text-[#F5EFE6] px-6 py-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-10">CabinStay</h2>

      <nav className="flex flex-col gap-6 text-sm">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-2 py-2 rounded-md transition-colors duration-300 ${
              isActive
                ? "text-[#F5EFE6] bg-[#4A2F21] font-semibold"
                : "text-[#E3D5C4] hover:text-white"
            }`
          }
        >
          <FaHome size={20} />
          Home
        </NavLink>

        <NavLink
          to="/cabins"
          className={({ isActive }) =>
            `flex items-center gap-3 px-2 py-2 rounded-md transition-colors duration-300 ${
              isActive
                ? "text-[#F5EFE6] bg-[#4A2F21] font-semibold"
                : "text-[#E3D5C4] hover:text-white"
            }`
          }
        >
          <FaCampground size={20} />
          Cabins
        </NavLink>

        <NavLink
          to="/booking"
          className={({ isActive }) =>
            `flex items-center gap-3 px-2 py-2 rounded-md transition-colors duration-300 ${
              isActive
                ? "text-[#F5EFE6] bg-[#4A2F21] font-semibold"
                : "text-[#E3D5C4] hover:text-white"
            }`
          }
        >
          <FaRegCalendarAlt size={20} />
          Bookings
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) =>
            `flex items-center gap-3 px-2 py-2 rounded-md transition-colors duration-300 ${
              isActive
                ? "text-[#F5EFE6] bg-[#4A2F21] font-semibold"
                : "text-[#E3D5C4] hover:text-white"
            }`
          }
        >
          <FaUserCircle size={20} />
          Users
        </NavLink>
        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `flex items-center gap-3 px-2 py-2 rounded-md transition-colors duration-300 ${
              isActive
                ? "text-[#F5EFE6] bg-[#4A2F21] font-semibold"
                : "text-[#E3D5C4] hover:text-white"
            }`
          }
        >
          <FiSettings size={20} />
          Setting
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
