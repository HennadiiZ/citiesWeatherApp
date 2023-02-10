import SearchInput from '../UI/SearchInput/SearchInput';
import { useState, useEffect } from 'react';
import { API_KEY } from '../constants/constants';

import FoundCityItem from '../components/FoundCityItem/FoundCityItem';

const FindCityPage = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [city, setCity] = useState("");
 
  const enteredCityHandler = (city) => { 
    setCity(city);
  }; 

  useEffect(() => {
    if (city) {
      function fetchCityByName(city) {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
        .then((response) => response.json())
        .then((data) => {
          const CITIES_DATA = []
          CITIES_DATA.push(data);
          setLoadedData(CITIES_DATA);

          if (CITIES_DATA.length > 1) {
            CITIES_DATA.shift();
          }
        });
      };
      fetchCityByName(city);
    }
  }, [city, loadedData]);  

  return (
    <>
      <p>Find City Page</p>
      <SearchInput enteredCity={enteredCityHandler}/>
      <hr />
      { loadedData.map(item => (
        <FoundCityItem city={item} key={item.id}/>
      ))}
    </>
  );
}

export default FindCityPage;