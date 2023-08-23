import { Album } from "@mui/icons-material"
import Albumcard from "../Albumcard/Albumcard"

import apis from "../../assets/apis/api";
import { useEffect, useState } from 'react';

import axios from "axios";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography } from '@mui/material';

import "./Albums.css";


const Albums = () => {
    const [ topSongs, setTopSongs ] = useState([]);
    const [ newSongs, setNewSongs ] = useState([]);


    useEffect( ()=> {
        fetchSongs();
    }, [] )

    const fetchSongs = async () => {
        try{
            const topSongsAPI = apis.top;
            const newSongsAPI = apis.new;

            const response = await axios.get(topSongsAPI);

            console.log('topSongs ', response.data);
            setTopSongs(response.data);

            const responseNewSongs = await axios.get(newSongsAPI);
            setNewSongs(responseNewSongs.data);

        }catch(e) {
            console.log('Error: ', e);
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return <div className="custom_section">
        <div className="album_category">
            <h2 className="album_heading">Top Albums</h2>
            <a href="#">Show All</a>

        </div>
        <Slider {...settings}>
        {topSongs.map(album=>(
             <Albumcard key={album.id} albumDetails={album}/>

        ))}
        </Slider>
       
        <div className="album_category">
            <h2 className="album_heading">New Albums</h2>
            <a href="#">Show All</a>

        </div>
        <Slider {...settings}>
        {newSongs.map(album=>(
             <Albumcard key={album.id} albumDetails={album}/>

        ))}
        </Slider>
      
       

    </div>
}

export default Albums;