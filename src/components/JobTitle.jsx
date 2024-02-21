import React, { useContext } from "react";
import { JobContext } from "./JobContext";

function JobTitle() {
  const { jobs } = useContext(JobContext);
  console.log(jobs);
  return (
    <div className="w-full">
      <main className="mt-16 flex bg-yellow-200">
        <div className="">
          <ul className="flex gap-7 ">
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
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="checkbox-all-search sr-only">
                    checkbox
                  </label>
                </div>
              </th>
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
                title,
                company_name,
                category,
                candidate_required_location,
              }) => {
                return (
                  <tr className="bg-white border-b  hover:bg-gray-50">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label className="checkbox-table-search-1 sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src="/docs/images/people/profile-picture-1.jpg"
                        alt="Jese image"
                      />
                      <div className="ps-3">
                        <div className="text-base font-semibold">{title}</div>
                        <div className="font-normal text-gray-500">
                          neil.sims@flowbite.com
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{category}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                        Online
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-60 hover:underline"
                      >
                        Edit user
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
