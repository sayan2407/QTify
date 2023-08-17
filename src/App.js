import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import Herosection from './Components/Herosection/Herosection';
// import { Toolbar } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Toolbar/>
      <Herosection/>
    </div>
  );
}

export default App;
