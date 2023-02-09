import classes from './CityDetails.module.css';
import { useState, useEffect } from 'react';

import { fetchData } from '../../_lib/api';

const CityDetails = (props) => {

  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);  
    fetchData(setLoadedData, setIsLoading);              
  }, []);

  console.log(loadedData);

  const city = loadedData.find(item => +item.id ===  +props.cityId); // will change item.id from loadedData here

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!city && !isLoading) {
    return <p>No city found!</p>;
  }

  return (
    <section>
      City Details
      <div className={classes.item__body}>
          <div className={classes.content}>
            <h3>{city.name}</h3>
            <p>{city.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="Weather Icon"></img>
            <p>Temperature: { Math.round(city.main.temp - 273)} &#8451;</p>
            {/* <p>Temperature: { Math.round(city.main.temp)} &#8451;</p> */}
          </div>
          <div className={classes.actions}>
            <button>Update weater</button>
          </div>
        </div>
    </section>
  );
};

export default CityDetails;