
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import { Depeartment } from './components/Depeartment';
import { Student } from './components/Student';

function App() {
  return (
    <div className="App">
      <h1>Welcome To React Project</h1>
      <Depeartment/>

      {/* <BrowserRouter>
            <Routes>
               <Route path="/s" elements={<Student/>} />

            </Routes>
      
      </BrowserRouter> */}
    </div>
  );
}

export default App;
