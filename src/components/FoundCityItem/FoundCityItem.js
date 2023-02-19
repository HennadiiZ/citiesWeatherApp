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
import { convertedTime } from '../../_helpers/helpers';

const FoundCityItem = ({city}) => {
  const cityCtx = useContext(DataContext);
  const history = useNavigate();

  const time = convertedTime(city.dt);

  const addCityHandler = () => {
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
    for(const key of cityCtx.cities) {
      if ( +key.id === +cityData.id) {
        history('/cities/');
        return;
      } 
    }
    // -----------------------------------------------
    addCityToList(cityData);
    history('/cities/');
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
          <p>{`${time.hours}:${time.minutes}`}</p>
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