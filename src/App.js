import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './components/Read';
import Upd from './components/Upd';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Upd />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
