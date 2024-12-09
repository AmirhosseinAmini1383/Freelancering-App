import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary-50 row-start-1 row-span-2 p-4">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavLink to="/owner/dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomNavLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "navlinkClass bg-primary-100/50 text-primary-900"
          : "navlinkClass text-secondary-600"
      }
    >
      {children}
    </NavLink>
  );
}
