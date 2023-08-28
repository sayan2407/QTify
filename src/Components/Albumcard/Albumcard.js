
import { 
  CardActionArea, 
  CardActions,
  CardMedia,
  Card,
  Tooltip ,

} from '@mui/material';
import "./Albumcard.css";
import { useNavigate } from 'react-router-dom';
const Albumcard = ({albumDetails}) => {

    // const followers = 100;
    // const cardTitle = "Hollywood Music";
    const navigate = useNavigate();


    const goToSongPage = () => {

      navigate(`/album/${albumDetails.slug}`);
    }

    return   <Tooltip  title={(albumDetails.songs) ? `${albumDetails.songs.length} Songs` : ``} placement="top" arrow>
                  <div onClick={goToSongPage} className='card_container'>
                            <Card sx={{ maxWidth: 300 }}>
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  height="140"
                                  image={albumDetails.image}
                                  alt={albumDetails.title}
                                />
                              </CardActionArea>
                              <CardActions>
                                <span className='followers'>
                                  {
                                    ( albumDetails.likes ) ? `${albumDetails.likes} likes` : `${albumDetails.follows} followers`
                                  }
                                  
                                </span>
                              </CardActions>
                        </Card>
                        <p className='album_title'>{albumDetails.title}</p>
                            
                  </div>
              </Tooltip>
   

}

export default Albumcard;