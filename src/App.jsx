import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./layouts/Home";
import JobContextProvider from "./context/JobContext";

function App() {
  function NotFound() {
    return <div style={{ padding: 20 }}>NotFound</div>;
  }

  return (
    <JobContextProvider>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </JobContextProvider>
  );
}

export default App;
