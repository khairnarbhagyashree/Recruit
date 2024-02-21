import { createContext, useEffect, useState } from "react";

export const JobContext = createContext();

const JobContextProvider = (props) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs?limit=40#")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
      });
  }, []);

  return (
    <JobContext.Provider value={{ jobs, loading }}>
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
