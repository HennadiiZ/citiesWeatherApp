import classes from './CitiesList.module.css';
import CityItem from '../CityItem/CityItem';

const CitiesList = (props) => {
  return (
    <ul className={classes.list}>
      { 
        props.cities.map(item =>(
        <CityItem 
          key={item.id}
          id={item.id}
          name={item.name}
          weatherString={item.weatherString}
          weather={item.weather}
          main={item.main}
        />
       ))
      }
    </ul>
  );
};
  
export default CitiesList;