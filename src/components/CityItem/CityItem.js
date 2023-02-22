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
import { useContext } from 'react';
import DataContext from '../../_store/data-context'; 
import { convertedTime } from '../../_helpers/helpers';

const CityItem = (props) => {
  const cityCtx = useContext(DataContext);
  const time = convertedTime(props.dt);

  const updateWeaterHandler = (e) => { //------------------------- ------------------------- 
    e.preventDefault();

    for(const key of cityCtx.cities) {

      if (key.id === props.id) {

        console.log('key', key);
        cityCtx.updateCity(key, key.id); 
        
        fetch(
          `https://cities-4f6c1-default-rtdb.firebaseio.com/cities/${key.itemId}${JSON_add}`, 
          {
            // method: 'PUT',
            method: 'PATCH',
            // body: JSON.stringify({
            //   city: key
            // }),
            body: JSON.stringify({...key}),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then(() => {
          console.log('Item updated successfully!');
        })
        .catch((error) => {
          console.error('Error updating item:', error);
        });
      } 
    };
  }; //------------------------- ------------------------- -------------------------

  const deleteCityHandler = (e) => {
    e.preventDefault();
    
    for(const key of cityCtx.cities) {

      if (key.id === props.id) {

        cityCtx.removeCity(key.id); 
        
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
              <p>{`${time.hours}:${time.minutes}`}</p>
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