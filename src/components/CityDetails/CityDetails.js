import classes from './CityDetails.module.css';
import { useState, useEffect } from 'react';

import { fetchData } from '../../_lib/api';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import { TEMP_CNV } from '../../constants/constants';

const CityDetails = (props) => {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);  
    fetchData(setLoadedData, setIsLoading);              
  }, []);

  const city = loadedData.find(item => +item.id ===  +props.cityId); 

  // const unix_timestamp = city.dt;
  // const cityInfo = {dt: '', main: ''};
  const cityInfo = city;
  const unix_timestamp = cityInfo?.dt;
  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const humidity = cityInfo?.main?.humidity;
  const feelsLike = Math.round(cityInfo?.main?.feels_like - TEMP_CNV);
  let day;

  // console.log(city.main);
  // console.log(city.main.humidity);
  // console.log(Math.round(city.main.feels_like - TEMP_CNV));

  switch (date.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = '';
      break;
  }

  if (isLoading) {
    return (
      <section className={classes.item__alert}>
        <p>Loading...</p>   
      </section>
    );
  }

  if (!city && !isLoading) {
    return (
      <section className={classes.item__alert}>
        <div>
          <h3>No city found!</h3>
          <div className={classes.icon}>
            <ErrorTwoToneIcon />
          </div>
        </div>
      </section>
    );
  }

  return (
    // <section>
    //   City Details
    //   <div className={classes.item__body}>
    //       <div className={classes.content}>
    //         <h3>{city.name}</h3>
    //         <p>{city.weather[0].description}</p>
    //         <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="Weather Icon"></img>
    //         <p>Temperature: { Math.round(city.main.temp - 273)} &#8451;</p>
    //       </div>
    //       <div className={classes.actions}>
    //         <button>Update weater</button>
    //       </div>
    //     </div>
    // </section>

    <section className={classes.item}>
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
              { city.weather[0].description }
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <p style={{marginRight: '20px'}}>Temperature: <b>{ Math.round(city.main.temp - TEMP_CNV)} &#8451;</b></p>
            <small>Fells like: { feelsLike } &#8451;</small>
          </Box> 
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <small>Humidity: { humidity } &#8451;</small>
          </Box> 
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h3 style={{marginRight: '10px'}}>{`${hours}:${minutes}`}</h3>
            <p> {day} </p>
          </Box> 
        </CardContent>
      </Card>
    </section>
  );
};

export default CityDetails;