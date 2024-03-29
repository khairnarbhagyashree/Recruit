import { createContext, useEffect, useState } from "react";

export const JobContext = createContext();

const JobContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState("");
  const [myfilters, setMyfilters] = useState({
    category: [],
    location: [],
    job_type: [],
  });

  const buildUrl = () => {
    let url = "/api/jobs";

    if (search) {
      url += `/search?search=${search}`;
      console.log(url);
      return url;
    }

    const queryParams = new URLSearchParams(myfilters).toString().toLowerCase();
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
  }, [myfilters, search]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        myfilters,
        setMyfilters,
        setSearch,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
