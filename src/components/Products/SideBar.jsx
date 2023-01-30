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

{/* 
    <Grid item md={3}>
      <Paper elevation={5} sx={{ p: 2 }}>
         */}
{/* 
        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams('type', e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel
                value="Боевик"
                control={<Radio />}
                label="Боевик"
              />
              <FormControlLabel
                value="Драма"
                control={<Radio />}
                label="Драма"
              />
              <FormControlLabel
                value="Фентези"
                control={<Radio />}
                label="Фентези"
              />
              <FormControlLabel
                value="Детектив"
                control={<Radio />}
                label="Детектив"
              />
              <FormControlLabel
                value="Убийство"
                control={<Radio />}
                label="Убийство"
              />
              <FormControlLabel
                value="Расследование"
                control={<Radio />}
                label="Расследование"
              />
              <FormControlLabel
                value="Экшен"
                control={<Radio />}
                label="Экшен"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams('price_lte', e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="all" />

            <FormControlLabel
              value="500"
              control={<Radio />}
              label="100-500"
            />
            <FormControlLabel
              value="750"
              control={<Radio />}
              label="500-750"
            />
            <FormControlLabel
              value="1200"
              control={<Radio />}
              label="750-1200"
            />
            <FormControlLabel
              value="2000"
              control={<Radio />}
              label="1200-2000"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid> */}
<Box sx={{display:'flex', justifyContent:'space-around', width:'100%'}}>

<FormControl fullWidth sx={{width:'30%', padding:'0,2% ',background:'#fff'}}>
  <InputLabel id="demo-simple-select-label" >Type</InputLabel>
  <Select
  defaultValue="All"
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Genre"
    onChange={(e) => fetchByParams('type', e.target.value)}
    // onChange={handleChange}
    >
    <MenuItem value={<Radio/>} >All</MenuItem>
    <MenuItem value='Боевик'>Боевик</MenuItem>
    <MenuItem value='Драма'>Драма</MenuItem>
    <MenuItem value='Детектив'>Детектив</MenuItem>
  </Select>
</FormControl>

<FormControl fullWidth sx={{width:'30%', padding:'0,2% ',background:'#fff'}}>
  <InputLabel id="demo-simple-select-label">Price</InputLabel>
  <Select
  defaultValue="All"
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  label="Price"
  onChange={(e) => fetchByParams('price', e.target.value)}
  // onChange={handleChange}
  >
    <MenuItem value={<Radio/>} >All</MenuItem>
    <MenuItem value={100||150||200||250|| 300}>150-300</MenuItem>
    <MenuItem value={300 || 350||400||450||500||550||600||700||750}>300-750</MenuItem>
    <MenuItem value={750||800||850||900||1000||1050||1100||1150||1200}>750-1200</MenuItem>
  </Select>
</FormControl>
<TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          id="outlined-basic"
          label="search..."
          variant="standard"
          sx={{width:'30%', padding:'0,2% ',background:'#fff'}}
          />
</Box>

   

  </>
  );
};

export default SideBar;