
import { Button, CardActionArea, CardActions,Typography,CardMedia,CardContent,Card } from '@mui/material';
import "./Albumcard.css";
const Albumcard = ({albumDetails}) => {

    const followers = 100;
    const cardTitle = "Hollywood Music";

    return  <div className='card_container'>
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
                  {albumDetails.follows} followers
                </span>
              </CardActions>
            </Card>
            <p className='album_title'>{albumDetails.title}</p>
                
          </div>

}

export default Albumcard;