import React from "react";
import JobTitle from "./JobTitle";

function Home() {
  return (
    <>
      <nav className="fixed bottom-[calc(100vh-theme(spacing.16))] left-0 right-0 top-0 bg-blue-200">
        <ul className="flex gap-10 justify-center">
          <li>Home</li>
          <li>Jobs</li>
          <li>Matches</li>
          <li>Screening</li>
        </ul>
      </nav>
      <div className="flex min-h-screen">
        <aside className="sticky top-16 h-[calc(100vh-theme(spacing.16))] w-40 overflow-y-auto bg-green-200"></aside>
        <JobTitle />
      </div>
    </>
  );
}

export default Home;
