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
import { ADMIN } from '../helper/consts';


const pages = [
  { name: 'HOME', link: '/', id: 1 },
  { name: 'PRODUCTS', link: '/products', id: 2 },
  { name: 'ABOUT US', link: '/about', id: 3 },
  // { name: 'ADMIN', link: '/admin', id: 4 },

];

export default function Navbar() {
  const { handleLogOut, user } = useAuth()
  const [count, setCount] = React.useState(0)
  const navigate = useNavigate()
  const { addBookToCart } = useCart()


  React.useEffect(() => {
    setCount(getCountProductsInCart)
  }, [addBookToCart])
  console.log(user)
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" color='warning' >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <Avatar alt="Remy Sharp" src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)' }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {pages.map((page) => (
              <MenuItem key={page.id} >
                <Link to={page.link}>
                  <Typography sx={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', borderRadius: '16px', padding: '5px 15px' }} color="white" textAlign="end">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}

            {user.email === ADMIN ? (<Link to='/admin'>
              <Button
                // onClick={handleCloseNavMenu}
                sx={{ boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', borderRadius: '16px', padding: '5px 15px' }}
              >
                ADMIN
              </Button>
            </Link>) : (null)}

          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>
              {user ? `Hello , ${user.email}` : 'Login please'}
            </Typography>

            <Link to='/cart'>
              <Button>
                <Badge color='primary' badgeContent={count}>
                  <ShoppingCartIcon sx={{ color: 'white' }} />
                </Badge>
              </Button>
            </Link>
            {user ? (<Button onClick={handleLogOut} color="inherit">Logout</Button>) : (<Button onClick={() => navigate('/auth')} color="inherit">Login</Button>)}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}