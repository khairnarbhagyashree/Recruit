import React, { useContext, useState } from "react";
import { JobContext } from "../context/JobContext";
import { DebounceInput } from "react-debounce-input";

const Search = () => {
  const { setSearch } = useContext(JobContext);

  return (
    <div className="flex">
      <form className="search-form w-full">
        <div className="relative mt-1">
          <div className="absolute right-0 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
          <DebounceInput
            minLength={1}
            debounceTimeout={500}
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            id="table-search"
            className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl w-80 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search here"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
