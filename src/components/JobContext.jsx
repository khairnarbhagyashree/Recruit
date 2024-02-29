import { createContext, useEffect, useState } from "react";

export const JobContext = createContext();

const JobContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const buildUrl = () => {
    let filters = selectedLocations.join(",").toLowerCase();
    let categoryfilters = selectedCategories.join(",").toLowerCase();

    let myfilters = {
      location: filters,
      categories: categoryfilters,
    };

    const queryParams = new URLSearchParams(myfilters).toString().toLowerCase();
    console.log("queryParams===>", queryParams);

    let url = "/api/jobs";

    if (queryParams) {
      url += `?${queryParams}`;
    }

    return url;
  };

  // useEffect(() => {
  //   const url = buildUrl();
  //   fetchJobs();
  // }, [selectedLocations, selectedCategories]);

  // const fetchJobs = () => {
  //   const url = buildUrl();
  //   console.log("url====>", url);
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setJobs(data);
  //     });

  useEffect(() => {
    const url = buildUrl();
    console.log("url====>", url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [selectedLocations, selectedCategories]);
  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        selectedLocations,
        setSelectedLocations,
        selectedCategories,
        setSelectedCategories,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
