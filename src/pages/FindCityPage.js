import SearchInput from '../UI/SearchInput/SearchInput';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import { useState } from 'react';
import CitiesList from '../components/CitiesList/CitiesList';
import { useState, useEffect } from 'react';
import { fetchCityByName, getACity } from '../_lib/api';


const CITIES_DATA = [
  { 
    name: 'Calgary', 
    weatherString: '+5', 
    id: 'p1', 
    main: {temp: 282.35, feels_like: 280.77, temp_min: 281.96, temp_max: 282.53, pressure: 1025},
    weather: [{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '03d'}] 
  },
]

const FindCityPage = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [city, setCity] = useState("");
 
  const enteredCity = (city) => { 
    setCity(city);
  }; 

  useEffect(() => {

    if (city) {
      fetchCityByName(city);

      //
      console.log('getACity', getACity);
      setLoadedData(getACity);
      console.log('loadedData', loadedData);
      //
    }
  }, [city, loadedData]);
  

  return (
    <>
      <p>Find City Page</p>
      <SearchInput enteredCity={enteredCity}/>
      <hr />

      { loadedData.length === 0 && (
        <CitiesList cities={CITIES_DATA}/>
      )}
    </>
  );
}

export default FindCityPage;