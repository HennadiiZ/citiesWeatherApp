import classes from './CityDetails.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import { TEMP_CNV } from '../../constants/constants';

import { useContext } from 'react';
import DataContext from '../../_store/data-context'; 
import { convertedTime, showDaysOfWeek } from '../../_helpers/helpers';

const CityDetails = (props) => {
  const cityCtx = useContext(DataContext); 
  // const city = loadedData.find(item => +item.id ===  +props.cityId); 
  const city = cityCtx?.cities?.find(item => +item.id ===  +props.cityId); 

  const time = convertedTime(city?.dt);

  const humidity = city?.main?.humidity;
  const feelsLike = Math.round(city?.main?.feels_like - TEMP_CNV);

  let day = showDaysOfWeek(time.date.getDay());

  // if (isLoading) {
  if (cityCtx.loading) {
    return (
      <section className={classes.item__alert}>
        <p>Loading...</p>   
      </section>
    );
  }

  // if (!city && !isLoading) {
  if (!city && !cityCtx.loading) {
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
            <h3 style={{marginRight: '10px'}}>{`${time.hours}:${time.minutes}`}</h3>
            <p> {day} </p>
          </Box> 
        </CardContent>
      </Card>
    </section>
  );
};

export default CityDetails;