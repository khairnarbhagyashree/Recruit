import { createContext, useEffect, useState } from "react";

export const JobContext = createContext();

const JobContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [selectedLocations, setSelectedLocations] = useState([]);
  // const [selectedCategories, setSelectedCategories] = useState([]);
  // const [selectedType, setSelectedType] = useState([]);
  const [myfilters, setMyfilters] = useState({
    category: [],
    location: [],
    job_type: [],
  });

  const buildUrl = () => {
    // let filters = myfilters.join(",").toLowerCase();
    // let categoryfilters = selectedCategories.join(",").toLowerCase();
    // let jobtypefilters = selectedType.join(",").toLowerCase();

    // let myfilters = {
    //   location: filters,
    //   categories: categoryfilters,
    //   job_type: jobtypefilters,
    // };

    const queryParams = new URLSearchParams(myfilters).toString().toLowerCase();
    console.log("queryParams===>", queryParams);

    let url = "/api/jobs";

    if (queryParams) {
      url += `?${queryParams}`;
    }

    return url;
  };

  useEffect(() => {
    const url = buildUrl();
    console.log("url====>", url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [myfilters]);
  // }, [selectedLocations, selectedCategories, selectedType]);
  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        myfilters,
        setMyfilters,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
