import { createContext, useEffect, useState } from "react";

export const JobContext = createContext();

const JobContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCategories, setselectedCategories] = useState([]);

  const buildUrl = () => {
    let filters = selectedLocations.join(",").toLowerCase();
    let categoryfilters = selectedCategories.join(",").toLowerCase();

    const url = "/api/jobs";

    if (filters) {
      return url + `?location=${filters}`;
    } else if (categoryfilters) {
      return `${buildUrl()}&&categories=${categoryfilters}`;
    } else {
      return buildUrl();
    }
  };
};

useEffect(() => {
  fetchJobs();
}, [selectedLocations, selectedCategories]);

const fetchJobs = () => {
  const url = buildUrl();
  console.log("url====>", url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setJobs(data);
    });

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        selectedLocations,
        setSelectedLocations,
        selectedCategories,
        setselectedCategories,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
