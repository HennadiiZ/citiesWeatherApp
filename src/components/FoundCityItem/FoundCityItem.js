import classes from './FoundCityItem.module.css';
import { useContext } from 'react';
import DataContext from '../../_store/data-context'; 
import { useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TEMP_CNV } from "../../constants/constants";
import { addCityToList } from '../../_lib/api';

const FoundCityItem = ({city}) => {
  const cityCtx = useContext(DataContext);
  const history = useNavigate();

  const unix_timestamp = city.dt;
  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  // const minutes = date.getMinutes();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + date.getMinutes();
  } else {
    minutes = date.getMinutes();
  }

  const addCityHandler = () => {
    history('/cities/');

    const cityData = {
      cod: city.cod,
      coord: city.coord,
      id: city.id,
      dt: city.dt, 
      main: city.main,
      name: city.name,
      sys: city.sys,
      timezone: city.timezone,
      weather: city.weather,
      wind: city.wind,
      base: city.base,
      visibility: city.visibility,
      clouds: city.clouds
    };
    // cityCtx.addCity(cityData);
    // ----------------------------------------------- preventing from adding same cities
    // for(const key of loadedData) {
    //   if ( +key.id === +cityData.id) {
    //     return;
    //   } 
    // }
    for(const key of cityCtx.cities) {
      if ( +key.id === +cityData.id) {
        return;
      } 
    }
    // -----------------------------------------------
    addCityToList(cityData);
  };

  return (
    <Card>
      <CardHeader
        title={city.name}
        titleTypographyProps={{ align: 'center' }}
        sx={{ backgroundColor: '#bbdefb' }}
      />
      <CardContent sx={{ backgroundColor: '#bbdefb' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            mb: 2,
          }}
        >
          <img 
            src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} 
            alt="Weather Icon"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            mb: 2,
          }}
        >
          <Typography component="h6" variant="h6" color="primary">
            {city.weather[0].description }
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h3 style={{marginRight: '10px'}}>{ Math.round(city.main.temp - TEMP_CNV)} &#8451;</h3>
          {/* <hr /> */}
          <p>{`${hours}:${minutes}`}</p>
        </Box> 
      </CardContent>
      <CardActions sx={{ backgroundColor: '#bbdefb' }}>
        <Button fullWidth color="primary" type='button' onClick={addCityHandler}>
          Add city
        </Button>
      </CardActions>
    </Card>
  );
};
  
export default FoundCityItem;