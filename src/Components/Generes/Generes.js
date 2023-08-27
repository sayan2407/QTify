
import {
    Box,
    Tab
} from '@mui/material';
// import Tab from '@mui/material/Tab';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { useState } from 'react';

import "./Generes.css";
import Sliderview from '../Slider/Sliderview';


const Generes = ({generes, allSongs}) => {

    console.log('allSongs=> ', allSongs);
    const category = [];

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList className="generes_tablist" style={{color: 'white'}} onChange={handleChange} aria-label="lab API tabs example">
              <Tab className='geners_tab' label="All" value={"1"} />
              {
                generes.map( (item, index)=>(
                    <Tab className='geners_tab' key={item.key} label={item.label} value={(index+2).toString()} />

                ))
              }
              
            </TabList>
          </Box>
          <TabPanel value="1">
          <Sliderview itemsDetail = {allSongs}/>

          </TabPanel>
          {
                generes.map( (item, index)=>(
                    // <Tab key={generes.key} label={generes.label} value={generes.key} />
                      <TabPanel key={item.key} value={(index+2).toString()}>
                        {
                            allSongs.map(song=> {
                                if (song.genre.key === item.key) {
                                    category.push(song);
                                }
                            })
                        }
                        <Sliderview itemsDetail = {category}/>
                      </TabPanel>


                ))
              }
        </TabContext>
        </Box>
    )
}

export default Generes;