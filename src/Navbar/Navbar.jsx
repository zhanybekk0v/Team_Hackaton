import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../img/bookLogo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SideBar from '../components/Products/SideBar';


const pages = [
  { name: 'HOME', link: '/', id: 1 },
  { name: 'PRODUCTS', link: '/products', id: 2 },
  { name: 'ABOUT US', link: '/about', id: 3 },
  { name: 'ADMIN', link: '/admin', id: 4 },

];

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" color='default' >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <Avatar alt="Remy Sharp" src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {pages.map((page) => (
              <MenuItem  key={page.id} >
                <Link to={page.link}>
                  <Typography  color="black" textAlign="end">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Box>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Link to='/cart'>
            <ShoppingCartIcon/>
            </Link>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}