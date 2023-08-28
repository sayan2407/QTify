import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import Herosection from './Components/Herosection/Herosection';
import Albums from './Components/Albums/Albums';
import Faqs from './Components/Faqs/Faqs';
// import { Toolbar } from '@mui/material';

import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Albumsongs from './Components/Albumsongs/Albumsongs';

function App() {
  return (
    <div className="App">
      <Toolbar/>
      
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/album/:slug" element={<Albumsongs/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
