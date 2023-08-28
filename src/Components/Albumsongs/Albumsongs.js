
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Albumsongs.css';


import { Button } from '@mui/material';
    


const Albumsongs = () => {
    const {slug} = useParams();
    console.log('slug ', slug);
    const [ albumDetails, setAlbumDetails ] = useState({});
    const [numberOfSongs, setNumberOfSongs] = useState(0);

    useEffect(()=>{
        fetchAlbumdetails();
    },[])

    const fetchAlbumdetails = async () => {
        try {
            const albumDetailsData =  await axios.get(`https://qtify-backend-labs.crio.do/album/${slug}`)
            .then(res=>{
                return res;
            })
            .catch(e=>{
                return {}
            });
            // console.log('albumDetailsData ', albumDetailsData.data.songs);
            
            setAlbumDetails(albumDetailsData.data);
            setNumberOfSongs(albumDetailsData.data.songs.length);
        } catch(e) {
            console.log('fetching Error!');
        }

    }
    return <div className='album_dashboard_page'>
        <div className='album_dashboard'>
            <div className='album_dashboard_image'>
                <img className='album_poster' src={albumDetails.image}/>
            </div>
            <div className='album_dashboard_section'>
                <h1 className="album_heading">{albumDetails.title}</h1>
                <p>{albumDetails.description}</p>
                <p>   {numberOfSongs} songs || {albumDetails.follows} Followers </p>
                <div className='album_btns'>
                <Button className='album_btn' variant="contained" color="success">
                        Shuffle
                </Button>
                <Button className='album_btn' variant="outlined" color="success">
                        Add to Library
                </Button>
                </div>
            </div>

        </div>
    </div>
}

export default Albumsongs;
