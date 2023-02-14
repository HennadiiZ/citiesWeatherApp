// import classes from './FoundCityItem.module.css';
// import { useContext } from 'react';
// import DataContext from '../../_store/data-context'; 
import { useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TEMP_CNV, CITIES_fb } from "../../constants/constants";
import { addCityToList, fetchCities } from '../../_lib/api';

const FoundCityItem = ({city}) => {
  // const cityCtx = useContext(DataContext);
  // const selectedCity = cityCtx.itemIsSelected(city.id);


  const history = useNavigate();

  //----
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);  
    fetchCities(setLoadedData, setIsLoading);              
  }, []);
  //----

  const unix_timestamp = city.dt;
  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

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
    // -----------------------------------------------
    for(const key of loadedData) {
      if ( +key.id === +cityData.id) {
        return;
      } 
    }
    // -----------------------------------------------
    addCityToList(cityData);
  };

  return (
    // <div className={classes.item} style={{"margin": "10px", "background": "gray", "display": "inline-block"}}>
    //   <div className={classes.item__body}>
    //     <div className={classes.content}>
    //       <h3>{city.name}</h3>
    //       <p>{city.weather[0].description}</p>
    //       <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="Weather Icon"></img>
    //       <p>Temperature: { Math.round(city.main.temp - 273)} &#8451;</p>
    //     </div>
    //     <div className={classes.actions}>
    //       <button type='button' onClick={addCityHandler}>{selectedCity ? 'remove city' : 'Add city'}</button>
    //     </div>
    //   </div>
    // </div>

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