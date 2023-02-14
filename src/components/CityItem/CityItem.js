import classes from './CityItem.module.css';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TEMP_CNV } from '../../constants/constants';

const CityItem = (props) => {

  const updateWeaterHandler = (e) => {
    e.preventDefault();
  };
  const deleteCityHandler = (e) => {
    e.preventDefault();

  };

  const unix_timestamp = props.dt;
  const date = new Date(unix_timestamp * 1000);
  // console.log( date.getDate() );
  // console.log( date.getMonth() );
  // console.log( date.getTime() );
  // console.log( '------------' );
  // console.log( date.getHours(), ':', date.getMinutes() );
  const hours = date.getHours();
  const minutes = date.getMinutes();
 
  return (
    // <li className={classes.item}>
    //   <Link to={`/cities/${props.id}`} className={classes.link}>
    //     <div className={classes.item__body}>
    //       <div className={classes.content}>
    //         <h3>{props.name}</h3>
    //         <p>{props.weather[0].description}</p>
    //         <img 
    //           src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} 
    //           alt="Weather Icon"
    //         />
    //         <p>Temperature: { Math.round(props.main.temp - 273)} &#8451;</p>
    //       </div>
    //       <div className={classes.actions}>
    //         <button type="button" onClick={updateWeaterHandler}>Update weater</button>
    //       </div>
    //       <div className={classes.actions}>
    //         <button type="button" onClick={deleteCityHandler}>Delete city</button>
    //       </div>
    //     </div>
    //   </Link>
    // </li>

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