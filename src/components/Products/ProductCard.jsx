import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProduct } from '../../contexts/ProductContextProvider';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item }) {
  const { deleteProduct } = useProduct()
  const navigate = useNavigate()

  return (
    <Card sx={{ width: 300, height: 500, margin: '20px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        width='150'
        image={item.picture}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.descr}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography> <Typography variant="body2" color="text.secondary">
          {item.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteProduct(item.id)} size="small">DELETE</Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>EDIT</Button>
      </CardActions>
    </Card>
  );
}