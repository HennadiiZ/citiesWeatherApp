import classes from './CityItem.module.css';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TEMP_CNV, JSON_add } from '../../constants/constants';

import { useState, useEffect } from 'react';
import { fetchCities } from '../../_lib/api';

const CityItem = (props) => {
  //-------------------------------
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);  
    fetchCities(setLoadedData, setIsLoading);              
  }, []);
  //-------------------------------

  const updateWeaterHandler = (e) => {
    e.preventDefault();
  };

  const deleteCityHandler = (e) => {
    e.preventDefault();

    for(const key of loadedData) {
      if (key.id === props.id) {
        fetch(
          `https://cities-4f6c1-default-rtdb.firebaseio.com/cities/${key.itemId}${JSON_add}`, 
          {
            method: 'DELETE',
          }
        )
        .then(() => {
          console.log('Item deleted successfully!');
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        });
      } 
    };
  };

  const unix_timestamp = props.dt;
  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
 
  return (
    <li className={classes.item}>
      <Link to={`/cities/${props.id}`} className={classes.link}>
        <Card>
          <CardHeader
            title={props.name}
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
                src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} 
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
                {props.weather[0].description }
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <p>Temperature: { Math.round(props.main.temp - TEMP_CNV)} &#8451;</p>
              <hr />
              <p>{`${hours}:${minutes}`}</p>
            </Box> 
          </CardContent>
          <CardActions sx={{ backgroundColor: '#bbdefb' }}>
            <Button fullWidth color="primary" onClick={updateWeaterHandler}>
              Update 
            </Button>
            <Button fullWidth color="error" onClick={deleteCityHandler}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Link>
    </li>
  );
};
  
export default CityItem;