import SearchInput from '../UI/SearchInput/SearchInput';
// import CitiesList from '../components/CitiesList/CitiesList';
import { useState, useEffect } from 'react';
import { API_KEY } from '../constants/constants';
import { useContext } from 'react';
import DataContext from '../_store/data-context';

import FoundCityItem from '../components/FoundCityItem/FoundCityItem';

const FindCityPage = () => {
  const [loadedData, setLoadedData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true); //
  const [city, setCity] = useState("");
  const cityCtx = useContext(DataContext);
 
  const enteredCityHandler = (city) => { 
    setCity(city);
  }; 

  // const addCityHandler = () => {
  //   cityCtx.addCity(loadedData);
  //   console.log(cityCtx.cities);
  // };

  // const addOrRemoveCityHandler = () => {
  //   cityCtx.addCity(loadedData);
  //   console.log(cityCtx.cities);
  // };

  useEffect(() => {
    if (city) {
      function fetchCityByName(city) {
        // setIsLoading(true); //
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
        .then((response) => response.json())
        .then((data) => {
          // setIsLoading(false); //
          const CITIES_DATA = []
          CITIES_DATA.push(data);
          setLoadedData(CITIES_DATA);

          // console.log('data.id', data.id);
          // cityCtx.selected(data.id);//

          if (CITIES_DATA.length > 1) {
            CITIES_DATA.shift();
          }
        });
      };
      fetchCityByName(city);
    }
  }, [city, loadedData, cityCtx]);  

  // if (isLoading) {
  //   return ();
  // }

  return (
    <>
      <p>Find City Page</p>
      <SearchInput enteredCity={enteredCityHandler}/>
      <hr />
      {/* {loadedData.length > 0 && (<div style={{"margin": "10px", "background": "black", "display": "inline-block"}}>
        <CitiesList cities={loadedData}/>
        <button type='button' onClick={addOrRemoveCityHandler}>Add city</button>
      </div>)} */}
      
      { loadedData.map(item => (
          <FoundCityItem city={item} key={item.id}/>
      ))}
    </>
  );
}

export default FindCityPage;