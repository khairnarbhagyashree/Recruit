import React from "react";

import Search from "./Search";

function Header() {
  return (
    <nav className="sticky bottom-[calc(100vh-theme(spacing.28))] left-0 right-0 top-0 z-20 bg-white border-b-[1px] border-gray-200">
      <ul className="flex space-x-8 font-semibold text-lg justify-center py-4 items-center">
        <div className="flex space-x-2">
          <div>Home</div>
        </div>
        <div className="flex space-x-2">
          <div>Jobs</div>
        </div>
        <div className="flex space-x-2">
          <div>Matches</div>
        </div>
        <div className="flex space-x-2">
          <div>Screening</div>
        </div>

        <Search />
      </ul>
    </nav>
  );
}

export default Header;
