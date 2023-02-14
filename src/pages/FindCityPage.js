import SearchInput from '../UI/SearchInput/SearchInput';
import { useState, useEffect } from 'react';
import { API_KEY, URL_city } from '../constants/constants';

import FoundCityItem from '../components/FoundCityItem/FoundCityItem';
import Container from '@mui/material/Container';
import { fetchCityByName } from '../_lib/api';

const FindCityPage = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [city, setCity] = useState("");
 
  const enteredCityHandler = (city) => { 
    setCity(city);
  }; 

  useEffect(() => {
    if (city) {
      // function fetchCityByName(city) {
      //   fetch(
      //     // `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      //     `${URL_city}${city}&appid=${API_KEY}`
      //   )
      //   .then((response) => response.json())
      //   .then((data) => {
      //     const CITIES_DATA = []
      //     CITIES_DATA.push(data);
      //     setLoadedData(CITIES_DATA);

      //     if (CITIES_DATA.length > 1) {
      //       CITIES_DATA.shift();
      //     }
      //   });
      // };
      fetchCityByName(city, setLoadedData);
    }
  }, [city, loadedData]);  

  return (
    <section>
      <Container maxWidth="lg" component="main">
        <div style={{"margin": "15px 0"}}>
          <SearchInput enteredCity={enteredCityHandler}/>
        </div>
        <hr />
        { loadedData.map(item => (
          <FoundCityItem city={item} key={item.id}/>
        ))}
      </Container>
    </section>
  );
}

export default FindCityPage;