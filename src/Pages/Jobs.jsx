import React from "react";

function Jobs() {
  return (
    <div className="p-6 rounded-lg bg-gray-100 mx-44 mt-20 shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Jobs</h1>
      <ul>
        <li>Job Title: Displays the title of each job listing.</li>
        <li>Location: Indicates the location of the job.</li>
        <li>
          Job Type: Specifies whether the job is full-time, freelance, contract,
          or part-time.
        </li>
        <li>
          Job Category: Categorizes jobs into various types such as DevOps,
          Product, Software Developer, etc.
        </li>
      </ul>
    </div>
  );
}

export default Jobs;
