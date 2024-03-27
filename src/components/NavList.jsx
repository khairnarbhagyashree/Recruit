import { NavLink } from "react-router-dom";
import React from "react";

const NavList = () => {
  const buttons = [
    { name: "Home", link: "/" },
    { name: "Jobs", link: "/jobs" },
    { name: "Matches", link: "/matches" },
    { name: "Screening", link: "/screening" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 text-gray-700 font-light">
      {buttons.map((buttons, index) => {
        return (
          <NavLink
            to={buttons.link}
            key={index}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 text-indigo-700 border-blue-600"
                : "border-b-2 border-transparent md:hover:text-indigo-700 md:hover:border-blue-600"
            }
          >
            {buttons.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavList;
