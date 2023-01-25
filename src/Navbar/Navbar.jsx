import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../img/bookLogo.png'


const pages = [
  { name: 'HOME', link: '/', id: 1 },
  { name: 'PRODUCTS', link: '/products', id: 2 },
  { name: 'ABOUT US', link: '/about', id: 3 },
  { name: 'ADMIN', link: '/admin', id: 4 },

];

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color='warning' >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <Avatar alt="Remy Sharp" src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {pages.map((page) => (
              <MenuItem  key={page.id} >
                <Link to={page.link}>
                  <Typography  color="white" textAlign="end">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}