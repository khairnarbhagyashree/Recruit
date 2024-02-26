import React from "react";
import JobTitle from "./JobTitle";
import Header from "./Header";
import SideFilter from "./SideFilter";

function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <aside className="sticky top-16 h-[calc(100vh-theme(spacing.16))] w-72 overflow-y-auto bg-green-200">
          <SideFilter/>
        </aside>
        <JobTitle />
      </div>
    </>
  );
}

export default Home;
