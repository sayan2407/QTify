
import {
    Typography
} from '@mui/material';

import './Herosection.css';

import heroLogo from '../../assets/uploads/hero-section/vibrating-headphone 1.png';
const Herosection = () => {

    return <div className='custom_section hero_section'>
        <p> 100 Thousand Songs, ad-free <br/>
            Over thousands podcast episodes</p>
     
      <img src={heroLogo} width='100px' height='100px'></img>
    </div>

}

export default Herosection;