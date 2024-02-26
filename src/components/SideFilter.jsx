import React, { useState } from "react";

const SideFilter = () => {
  const locations = ["USA", "Canada", "India", "Germany", "Worldwide"];

  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleCheckboxChange = (event) => {
    const location = event.target.value;
    const isChecked = event.target.checked;

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
