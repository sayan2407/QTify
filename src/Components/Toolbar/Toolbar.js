
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

    return  <AppBar position="static">
    <ToolBar style={toolbarStyle}>
      {/* Logo */}
      <div>
        <img src="/path-to-your-logo.png" alt="Logo" />
      </div>
      
      {/* Search Input */}
      <div>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      
      {/* Button */}
      <div>
        <Button variant="contained" color="primary">
          Your Button
        </Button>
      </div>
    </ToolBar>
  </AppBar>
}

export default Toolbar;