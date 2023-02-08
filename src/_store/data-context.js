import React, { useState } from 'react';

const DataContext = React.createContext({
  cities: [],
  totalCities: 0,
  addCity: (chosenCity) => {},
  removeCity: (id) => {},
  selected: (id) => {}
});

export const DataContextProvider = (props) => {
  const [addedCities, setAddedCities] = useState([]);

  const addCityHandler = (favItem) => {
    setAddedCities((prevFavItem) => {
      return prevFavItem.concat(favItem);
    });
  };

  const removeCityHandler = (itemId) => {
    setAddedCities((prevFavItem) => {
      return prevFavItem.filter(item => item.id !== itemId);
    });   
  };

  const itemIsSelectedHandler = (itemId) => {
    return addedCities.some(item => item.id === itemId);
  };

  const context= {
    cities: addedCities,
    totalCities: addedCities.length,
    addCity: addCityHandler,
    removeCity: removeCityHandler,
    selected: itemIsSelectedHandler
  };
      
  return (
    <DataContext.Provider value={context}>
      { props.children }
    </DataContext.Provider>
  );
}

export default DataContext;