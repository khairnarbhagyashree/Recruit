import React from "react";
import "./App.css";
import Home from "./components/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import JobContextProvider from "./components/JobContext";

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
