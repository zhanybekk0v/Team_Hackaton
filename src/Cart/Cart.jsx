import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCart } from '../contexts/CartContextProvider';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const { getCart, cart ,deleteProductInCart} = useCart()

 

  React.useEffect(() => {
    getCart()
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">-+</TableCell>
            <TableCell align="right">SubPrice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.item.picture} alt="" style={{ width: 100, height: 140}} />
              </TableCell>
              <TableCell align="right">{row.item.name}</TableCell>
              <TableCell align="right">{row.item.type}</TableCell>
              <TableCell align="right">{row.item.price}</TableCell>
              <TableCell align="right">{row.item.author}</TableCell>
              <TableCell align="right">
                <input
                  min={1}
                  max={20}
                  
                  type="number"
                  value={row.count}
                />
              </TableCell>
              <TableCell align="right">
                {row.subPrice}
              </TableCell>
              <TableCell align="right" color='primary'>
                <button onClick={()=> deleteProductInCart(row.item.id)} style={{ padding: '5px 20px', borderRadius: 10, border: 'none', color: 'white', backgroundColor: 'red' }} >Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}