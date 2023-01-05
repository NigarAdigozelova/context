import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{background: "linear-gradient(90deg, rgba(119,51,142,1) 0%, rgba(238,38,238,1) 51%, rgba(189,23,196,1) 75%)"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Context API
          </Typography>
          <Button color="inherit" variant='contained'style={{marginRight:"10px"}}><Link to="/" style={{textDecoration:"none"}}>Home</Link></Button>
          <Button color="inherit" variant='contained'><Link to="basket" style={{textDecoration:"none"}}>Basket</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar