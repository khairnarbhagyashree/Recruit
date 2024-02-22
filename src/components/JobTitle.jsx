import React, { useContext } from "react";
import { JobContext } from "./JobContext";

function JobTitle() {
  const { jobs } = useContext(JobContext);
  console.log(jobs);
  return (
    <div className="w-full">
      <main className="mt-16 flex bg-yellow-200 justify-start">
        <div className="mx-20">
          <ul className="flex gap-10 justify-center py-6">
            <li>All</li>
            <li>Open</li>
            <li>Hold</li>
            <li>Closed</li>
            <li>Drafts</li>
          </ul>
        </div>
      </main>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Job Title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Salary
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(
              ({
                id,
                title,
                company_name,
                category,
                candidate_required_location,
                company_logo,
                salary,
              }) => {
                return (
                  <tr key={id} className="bg-white border-b  hover:bg-gray-50">
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src={`https://ui-avatars.com/api/?bold=true&font-size=0.33&background=random&name=${company_name}`}
                        alt=""
                      />
                      <div className="ps-3">
                        <div className="text-base font-semibold">{title}</div>
                        <div className="font-normal text-gray-500">
                          {company_name}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{category}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                        <button className="bg-purple-300 text-black px-2 py-1 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
                          Online
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-60 hover:underline"
                      >
                        {salary || "Salary not disclosed"}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-60 hover:underline"
                      >
                        {candidate_required_location}
                      </a>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobTitle;
