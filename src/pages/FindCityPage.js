import SearchInput from '../UI/SearchInput/SearchInput';
import { useState, useEffect } from 'react';
import { API_KEY, URL_city } from '../constants/constants';

import FoundCityItem from '../components/FoundCityItem/FoundCityItem';
import Container from '@mui/material/Container';
import { fetchCityByName } from '../_lib/api';

const FindCityPage = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [city, setCity] = useState("");
  // const [isError, setIsError] = useState(false);
 
  const enteredCityHandler = (city) => { 
    setCity(city);
  }; 

  useEffect(() => {
    if (city) {
      fetchCityByName(city, setLoadedData);
    }
  }, [city, loadedData]);  

  // if (isError) {
  //   return (
  //     <p>No such city found.</p>
  //   )
  // }

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