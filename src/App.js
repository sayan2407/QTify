import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import Herosection from './Components/Herosection/Herosection';
import Albums from './Components/Albums/Albums';
import Faqs from './Components/Faqs/Faqs';
// import { Toolbar } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Toolbar/>
      <Herosection/>
      <Albums/>
      <Faqs/>
    </div>
  );
}

export default App;
