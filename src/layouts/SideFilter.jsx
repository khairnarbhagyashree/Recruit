import React, { useContext, useState } from "react";
import { JobContext } from "../context/JobContext";

const SideFilter = () => {
  const locations = ["USA", "Canada", "India", "Germany", "Worldwide"];
  const categories = [
    "Marketing",
    "Software",
    "Product",
    "Operations",
    "Sales",
  ];

  const job_type = ["Full_time", "Freelance", "Contract"];

  const { setMyfilters } = useContext(JobContext);

  const handleCheckboxChange = (filter, value) => {
    setMyfilters((prevParams) => {
      const updatedFilters = [...prevParams[filter]];
      const index = updatedFilters.indexOf(value);

      if (index !== -1) {
        // Remove if already selected
        updatedFilters.splice(index, 1);
      } else {
        // Add if not selected
        updatedFilters.push(value);
      }

      return {
        ...prevParams,
        [filter]: updatedFilters,
      };
    });
  };

  return (
    <div>
      <aside className="sticky top-20 h-[calc(100vh-theme(spacing.16))] w-72 overflow-y-auto"></aside>
      <div>
        <h3>Locations</h3>
        <div>
          {locations.map((location) => (
            <li key={location}>
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                type="checkbox"
                id={location}
                value={location}
                onChange={() => handleCheckboxChange("location", location)}
              />
              <label form="default-checkbox" className="ms-2 text-gray-400">
                {location}
              </label>
            </li>
          ))}
        </div>
      </div>

      <div>
        <h3>Categories</h3>
        <div>
          {categories.map((categories) => (
            <li key={categories}>
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                type="checkbox"
                id={categories}
                value={categories}
                onChange={() => handleCheckboxChange("category", categories)}
              />
              <label form="default-checkbox" className="ms-2 text-gray-400">
                {categories}
              </label>
            </li>
          ))}
        </div>
      </div>

      <div>
        <h3>Job Type</h3>
        <div>
          {job_type.map((job_type) => (
            <li key={job_type}>
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                type="checkbox"
                id={job_type}
                value={job_type}
                onChange={() =>
                  handleCheckboxChange(
                    "job_type",
                    job_type.split(" ").join("_")
                  )
                }
              />
              <label form="default-checkbox" className="ms-2 text-gray-400">
                {job_type}
              </label>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideFilter;