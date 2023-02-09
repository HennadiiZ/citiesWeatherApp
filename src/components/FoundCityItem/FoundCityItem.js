import classes from './FoundCityItem.module.css';
import { useContext } from 'react';
import DataContext from '../../_store/data-context'; 
import { useNavigate  } from 'react-router-dom';

const FoundCityItem = ({city}) => {
  const cityCtx = useContext(DataContext);
  const selectedCity = cityCtx.itemIsSelected(city.id);
  const history = useNavigate();

  const addOrRemoveCityHandler = () => {
    history('/cities/');

    cityCtx.addCity({
      cod: city.cod,
      coord: city.coord,
      id: city.id,
      main: city.main,
      name: city.name,
      sys: city.sys,
      timezone: city.timezone,
      weather: city.weather,
      wind: city.wind
    });

    // if (selectedCity) {
    //   cityCtx.removeCity(city.id);
    // } else {
    // // cityCtx.addCity(city);
    //   cityCtx.addCity({
    //     cod: city.cod,
    //     coord: city.coord,
    //     id: city.id,
    //     main: city.main,
    //     name: city.name,
    //     sys: city.sys,
    //     timezone: city.timezone,
    //     weather: city.weather,
    //     wind: city.wind
    //   });
    // }
  };

  return (
    <div className={classes.item} style={{"margin": "10px", "background": "gray", "display": "inline-block"}}>
      <div className={classes.item__body}>
        <div className={classes.content}>
          <h3>{city.name}</h3>
          <p>{city.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="Weather Icon"></img>
          <p>Temperature: { Math.round(city.main.temp - 273)} &#8451;</p>
          {/* <p>Temperature: { Math.round(city.main.temp)} &#8451;</p> */}
        </div>
        <div className={classes.actions}>
          {/* <button>Update weater</button> */}
          <button type='button' onClick={addOrRemoveCityHandler}>{selectedCity ? 'remove city' : 'Add city'}</button>
        </div>
      </div>
    </div>
  );
};
  
export default FoundCityItem;