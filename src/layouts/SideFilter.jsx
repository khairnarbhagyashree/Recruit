import React, { useContext, useState } from "react";
import { JobContext } from "../context/JobContext";

const SideFilter = () => {
  const locations = ["USA", "Canada", "India", "Germany", "Worldwide"];
  const categories = ["Marketing", "Software", "Product", "DevOps", "Sales"];

  const jobtype = ["Full_time", "Freelance", "Contract", "Part_time"];

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
    <div className="sticky top-20 h-[calc(100vh-theme(spacing.16))] w-72 overflow-y-auto">
    <div>
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
              <label className="ms-2 text-gray-400">{location}</label>
            </li>
          ))}
        </div>
      </div>

      <div>
        <h3>Categories</h3>
        <div>
          {categories.map((category) => (
            <li key={category}>
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                type="checkbox"
                id={category}
                value={category}
                onChange={() => handleCheckboxChange("category", category)}
              />
              <label className="ms-2 text-gray-400">{category}</label>
            </li>
          ))}
        </div>
      </div>

      <div>
        <h3>Job Type</h3>
        <div>
          {jobtype.map((jobtype) => (
            <li key={jobtype}>
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                type="checkbox"
                id={jobtype}
                value={jobtype}
                onChange={() =>
                  handleCheckboxChange("job_type", jobtype.split(" ").join("_"))
                }
              />
              <label className="ms-2 text-gray-400">{jobtype}</label>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
