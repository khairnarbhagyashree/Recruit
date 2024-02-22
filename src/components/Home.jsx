import React from "react";
import JobTitle from "./JobTitle";
import Search from "./Search";
import Header from "./Header";

function Home() {
  return (
    <>
   <Header/>
      <div className="flex min-h-screen">
        <aside className="sticky top-16 h-[calc(100vh-theme(spacing.16))] w-40 overflow-y-auto bg-green-200"></aside>
        <JobTitle />
      </div>
    </>
  );
}

export default Home;
