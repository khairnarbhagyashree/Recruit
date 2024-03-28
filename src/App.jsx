import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./layouts/Home";
import JobContextProvider from "./context/JobContext";
import Jobs from "./Pages/Jobs";
import Matches from "./Pages/Matches";
import Screening from "./Pages/Screening";

function App() {
  function NotFound() {
    return <div style={{ padding: 20 }}>NotFound</div>;
  }

  return (
    <JobContextProvider>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/screening" element={<Screening />} />
        </Routes>
      </Router>
    </JobContextProvider>
  );
}

export default App;
