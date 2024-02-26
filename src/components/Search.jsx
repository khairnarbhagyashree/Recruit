import React, { useState } from "react";

const Search = ({ handleSubmit, history }) => {
  const [searchEntry, setSearchEntry] = useState("");
  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <div className="text-green-700"></div>
      <form
        className="search-form w-full md:w-1/2"
        onSubmit={(e) => handleSubmit(e, searchEntry)}
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={updateSearchInput}
            type="search"
            id="default-search"
            className="block items-center w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Search..."

          />
        </div>
      </form>
    </div>
  );
};

export default Search;