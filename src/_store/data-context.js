import React, { useState, useEffect } from 'react';
import { fetchCities } from '../_lib/api';

const DataContext = React.createContext({
  cities: [],
  totalCities: 0,
  loading: false,
  addCity: (newCity) => {},
  removeCity: (id) => {},
  updateCity: (id) => {}, //-------------------------
});

export const DataContextProvider = (props) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {  
    setIsLoading(true);  
    fetchCities(setCities, setIsLoading); 
  }, []);

  const addCityHandler = (newCity) => {
    setCities([...cities, newCity]);
  };

  const removeCityHandler = (itemId) => {
    setCities((prevCity) => {
      return prevCity.filter(item => item.id !== itemId);
    }); 
  };

  const updateCityHandler = (itemId) => {  //-------------------------
    // setCities((prevCity) => {
    //   return prevCity.filter(item => item.id !== itemId);
    // }); 
    console.log(itemId);
  };

  const context= {
    cities: cities, 
    totalCities: cities.length, 
    loading: isLoading,
    addCity: addCityHandler,
    removeCity: removeCityHandler,
    updateCity: updateCityHandler, //-------------------------
  };
      
  return (
    <DataContext.Provider value={context}>
      { props.children }
    </DataContext.Provider>
  );
}

export default DataContext;