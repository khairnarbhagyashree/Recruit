import React from "react";
import Search from "../components/Search";
import NavList from "../components/NavList";

function Header() {
  const imgUrl = new URL("../assets/logo.png", import.meta.url).href;
  return (
    <nav className="fixed md:bottom-[calc(100vh-theme(spacing.20))] left-0 right-0 top-0 z-20 bg-white border-b-[1px] border-gray-200">
      <div className="flex flex-col md:flex-row md:justify-between mx-6 md:items-center py-4">
        <div className="flex text-3xl md:items-center space-x-2 justify-between">
          <div className="flex space-x-2">
            <div>
              <img src={imgUrl} className="w-8 h-8" alt="Logo" />
            </div>
            <div>recruit</div>
          </div>
        </div>
        <NavList />
        <div>
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Header;

// export const PAGES = {
//   Home: {
//     title: "Home",
//     description: "Welcome to the Home Page!",
//   },
//   Jobs: {
//     title: "Jobs",
//     description: "View all available jobs on our platform",
//   },
//   Matches: {
//     title: "Matches",
//     description: "See who you have matched with so far.",
//   },
//   Screening: {
//     title: "Screenings",
//     description:
//       "Take a look at your screening results for each job you have applied to.",
//   },
// };
