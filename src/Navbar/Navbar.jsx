import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Badge, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../img/bookLogo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth } from '../contexts/AuthContextProvider';
import { getCountProductsInCart } from '../helper/functions';
import { useCart } from '../contexts/CartContextProvider';


const pages = [
  { name: 'HOME', link: '/', id: 1 },
  { name: 'PRODUCTS', link: '/products', id: 2 },
  { name: 'ABOUT US', link: '/about', id: 3 },
  { name: 'ADMIN', link: '/admin', id: 4 },

];

export default function Navbar() {
  const { handleLogOut, user: { email } } = useAuth()
  console.log(email);
  const [count, setCount] = React.useState(0)
  const navigate = useNavigate()
  const {addBookToCart} = useCart()


  React.useEffect(() => {
    setCount(getCountProductsInCart)
  },[addBookToCart])

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" color='warning' >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <Avatar alt="Remy Sharp" src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)' }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {pages.map((page) => (
              <MenuItem key={page.id} >
                <Link to={page.link}>
                  <Typography sx={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', borderRadius: '16px', padding: '5px 15px' }} color="white" textAlign="end">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to='/cart'>
              <Button>
                <Badge color='primary' badgeContent={count}>
                  <ShoppingCartIcon sx={{ color: 'white' }} />
                </Badge>
              </Button>
            </Link>
            {email ? (<Button onClick={handleLogOut} color="inherit">Login</Button>) : (<Button onClick={() => navigate('/auth')} color="inherit">Logout</Button>)}

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}