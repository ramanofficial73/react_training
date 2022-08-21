import react, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Depeartment } from "./components/Depeartment";
import { Student } from "./components/Student";

function App() {
  const hlo = () => {
    alert("Welcome to Star Health...");
  };

  return (
    <>
      <h1>Welcome To React Project</h1>
      <h1>
        <button onClick={hlo}>Event</button>
      </h1>

      <ul>
        <li>
          <Link to="/student">Student</Link>
        </li>
        <li>
          <Link to="/departement">Depeartment</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        
      </ul>

      <Routes>
        <Route exect path="/" />
      </Routes>
      <Routes>
        <Route path="/student" element={<Student />} />
      </Routes>
      <Routes>
        <Route path="/departement" element={<Depeartment />} />
      </Routes>
    </>
  );
}

export default App;
