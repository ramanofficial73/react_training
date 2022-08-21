import react , {useState} from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import { Depeartment } from './components/Depeartment';
import { Student } from './components/Student';

function App() {
  const hlo=()=>{
    alert("Welcome to Star Health...")
}

  return (
    <div className="App">
      <h1>Welcome To React Project</h1>
      
    <h1><button onClick={hlo}>Event</button></h1>
      <Depeartment/>
      <Student/>
    
    </div>
  );
}

export default App;
