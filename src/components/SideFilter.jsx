import React, { useContext, useState } from "react";
import { JobContext } from "./JobContext";

const SideFilter = () => {
  const locations = ["USA", "Canada", "India", "Germany", "Worldwide"];
  const categories = [
    "Marketing",
    "Software",
    "Product",
    "Operations",
    "Sales",
  ];

  const { selectedLocations, setSelectedLocations } = useContext(JobContext);

  const handleCheckboxChange = (e) => {
    const location = e.target.value;
    
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedLocations([...selectedLocations, location]);
    } else {
      setSelectedLocations(selectedLocations.filter((loc) => loc !== location));
    }
  };

  return (
    <div>
      <h3>Locations</h3>
      <ul>
        {locations.map((location) => (
          <li key={location}>
            <input
              type="checkbox"
              id={location}
              value={location}
              checked={selectedLocations.includes(location)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={location}>{location}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideFilter;
