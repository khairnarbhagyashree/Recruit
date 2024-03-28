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
        <SideFilter />
        <JobTitle />
      </div>
    </>
  );
}

export default Home;
