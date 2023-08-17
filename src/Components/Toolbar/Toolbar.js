
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';




const Toolbar = () => {

    const toolbarStyle = {
        display: 'flex',
        justifyContent: 'space-around'
    };

    return  <AppBar style={{backgroundColor: '#34C94B', color: '#FFFFFF'}} position="static">
    <ToolBar style={toolbarStyle}>
      {/* Logo */}
      <div>
        <img src="/path-to-your-logo.png" alt="Logo" />
      </div>
      
      {/* Search Input */}
      <div>
       
        <InputBase
          style={{border: '1px solid #000000', borderRadius: '0.5rem', padding: '0.2rem 0.5rem', background: 'white'}}
          placeholder="Search a song"
          inputProps={{ 'aria-label': 'search' }}
        />
         <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      
      {/* Button */}
      <div>
        <Button variant="contained" color="primary">
          Give Feedback
        </Button>
      </div>
    </ToolBar>
  </AppBar>
}

export default Toolbar;