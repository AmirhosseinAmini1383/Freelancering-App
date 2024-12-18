import { NavLink } from "react-router-dom";

export default function CustomNavLink({ children, to }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "navlinkClass bg-primary-100/80 text-primary-900"
            : "navlinkClass text-secondary-600"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
