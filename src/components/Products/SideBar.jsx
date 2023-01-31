import { Autocomplete, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContextProvider';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchByParams } = useProduct()
  const [search, setSearch] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <FormControl fullWidth sx={{ width: '30%', padding: '0,2% ', background: '#fff', border: '1px solid black' }}>
          <InputLabel id="demo-simple-select-label" >Type</InputLabel>
          <Select
            defaultValue="all"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Genre"
            onChange={(e) => fetchByParams('type', e.target.value)}
          >
            <MenuItem value="all" label="all">All</MenuItem>
            <MenuItem value='Боевик'>Боевик</MenuItem>
            <MenuItem value='Драма'>Драма</MenuItem>
            <MenuItem value='Детектив'>Детектив</MenuItem>
            <MenuItem value='Фантастика'>Фантастика</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ width: '30%', padding: '0,2% ', background: '#fff', border: '1px solid black' }}>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            defaultValue="all"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Price"
            onChange={(e) => fetchByParams('price', e.target.value)}
          >
            <MenuItem value='all' label='all' >All</MenuItem>
            <MenuItem value={100 || 150 || 200 || 250 || 300}>150-300</MenuItem>
            <MenuItem value={300 || 350 || 400 || 450 || 500 || 550 || 600 || 700 || 750}>300-750</MenuItem>
            <MenuItem value={900|| 750 || 800 || 850 || 1000 || 1050 || 1100 || 1150 || 1200}>750-1200</MenuItem>
          </Select>
        </FormControl>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          id="outlined-basic"
          label="search..."
          variant="standard"
          sx={{ width: '30%', padding: '0,2% ', background: '#fff', border: '1px solid black' }}
        />
      </Box>
    </>
  );
};

export default SideBar;