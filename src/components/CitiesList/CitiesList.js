import classes from './CitiesList.module.css';
import CityItem from '../CityItem/CityItem';
import Grid from '@mui/material/Grid';

const CitiesList = (props) => {
  return (
    <ul className={classes.list}>
      <Grid
        container
      >
        { 
          props.cities.map(item =>(
          <CityItem 
            key={item.id}
            id={item.id}
            name={item.name}
            weather={item.weather}
            main={item.main}
            timezone={item.timezone}
            dt={item.dt}
          />
         ))
        }
      </Grid>
    </ul>
  );
};
  
export default CitiesList;