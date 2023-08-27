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
import Generes from "../Generes/Generes";
import Sliderview from "../Slider/Sliderview";


const Albums = () => {
    const [ topSongs, setTopSongs ] = useState([]);
    const [ newSongs, setNewSongs ] = useState([]);

    const [topSongShow, setTopSongShow] = useState(false);
    const [newSongShow, setNewSongShow] = useState(false);

    const [ generes, setGeneres ] = useState([]);
    const [ allSongs, setAllSongs ] = useState([]);


    useEffect( ()=> {
        fetchSongs();
    }, [] )

    const fetchSongs = async () => {
        const topSongsAPI = apis.top;
        const newSongsAPI = apis.new;
        const genresAPI = apis.genres
        const allSongsAPI = apis.songs;
        try{
        
            const response = await axios.get(topSongsAPI)
            .then(res=> {
                return res
            })
            .catch(e=>{
                alert('Erro!');
            });

            // console.log('topSongs ', response.data);
            setTopSongs(response.data);
     

        
            const responseNewSongs = await axios.get(newSongsAPI)
            .then(res=>{
                return res;
            })
            .catch(e=>{
                alert('Error!');

            });
            setNewSongs(responseNewSongs.data);
    

    
            const generesData = await axios.get(genresAPI)
            .then(res=>{
                return res;
            })
            .catch(e=>{
                alert('Error!');

            });
            // console.log('generesData ', generesData);
            setGeneres( generesData.data.data );

            const songsData = await axios.get(allSongsAPI)
            .then(res=>{
                return res;
            })
            .catch(e=>{
                alert('Error!');

            });
            console.log('songsData ', songsData);
            setAllSongs( songsData.data );
        } catch(e) {
            console.log('fetching error');

        }

       
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
    };

    const changeTopSongLayout = () => {
        let currVal = topSongShow;
        // console.log(currVal);
        setTopSongShow( !currVal );
    }

    const changeNewSongLayout = () => {
        let currVal = newSongShow;
        // console.log(currVal);
        setNewSongShow( !currVal );
    }
    return <div className="custom_section">
        <div className="album_category">
            <h2 className="album_heading">Top Albums</h2>
            <span className="show_btn" onClick={changeTopSongLayout}> {topSongShow ? "Collapse All" : "Show All"} </span>
        </div>

        {
            ( topSongShow ) ? (
                <div className="display_songs">
                     {topSongs.map(album=>(
                     <Albumcard key={album.id} albumDetails={album}/>
        
                ))}
                </div>
            ) : (
                <Sliderview itemsDetail = {topSongs}/>
            )
        }
      
       
        <div className="album_category">
            <h2 className="album_heading">New Albums</h2>
            <span className="show_btn" onClick={changeNewSongLayout}> {newSongShow ? "Collapse All" : "Show All"} </span>
            

        </div>
        {
            ( newSongShow ) ? (
                <div className="display_songs">
                      {newSongs.map(album=>(
                     <Albumcard key={album.id} albumDetails={album}/>
        
                ))}
                </div>
            ) : (
                <Sliderview itemsDetail = {newSongs}/>
            )
        }

        <Generes generes={generes} allSongs={ allSongs }/>
      
      
       

    </div>
}

export default Albums;