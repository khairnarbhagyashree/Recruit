import React from "react";
import JobTitle from "../components/JobTitle";
import Header from "./Header";
import SideFilter from "./SideFilter";

function Home() {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="flex min-h-screen mt-20">
        {/* <aside className="sticky top-20 h-[calc(100vh-theme(spacing.16))] w-72 overflow-y-auto"> */}
        <SideFilter />
        {/* </aside> */}
        <JobTitle />
      </div>
    </>
  );
}

export default Home;
