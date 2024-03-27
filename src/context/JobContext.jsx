import { createContext, useEffect, useState } from "react";

export const JobContext = createContext();

const JobContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState("");
  const [myfilters, setMyfilters] = useState({
    category: [],
    location: [],
    job_type: [],
  });

  const buildUrl = () => {
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
