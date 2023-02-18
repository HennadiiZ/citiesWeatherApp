import React, { useState, useEffect } from 'react';
import { fetchCities } from '../_lib/api';

const DataContext = React.createContext({
  cities: [],
  totalCities: 0,
  loading: false
});

export const DataContextProvider = (props) => {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {  
    setIsLoading(true);    
    fetchCities(setLoadedData, setIsLoading);              
  }, []);

  const context= {
    cities: loadedData, //addedCities,
    totalCities: loadedData.length, //addedCities.length,
    loading: isLoading
  };
      
  return (
    <DataContext.Provider value={context}>
      { props.children }
    </DataContext.Provider>
  );
}

export default DataContext;

























// import React, { useState } from 'react';

// const DataContext = React.createContext({
//   cities: [],
//   totalCities: 0,
//   addCity: (chosenCity) => {},
//   removeCity: (id) => {},
//   itemIsSelected: (id) => {}
// });

// export const DataContextProvider = (props) => {
//   const [addedCities, setAddedCities] = useState([]);

//   const addCityHandler = (chosenCity) => {
//     setAddedCities((prevCity) => {
//       return prevCity.concat(chosenCity);
//     });
//   };

//   const removeCityHandler = (itemId) => {
//     setAddedCities((prevCity) => {
//       return prevCity.filter(item => item.id !== itemId);
//     });   
//   };

//   const itemIsSelectedHandler = (itemId) => {
//     return addedCities.some(item => item.id === itemId);
//   };

//   const context= {
//     cities: addedCities,
//     totalCities: addedCities.length,
//     addCity: addCityHandler,
//     removeCity: removeCityHandler,
//     itemIsSelected: itemIsSelectedHandler
//   };
      
//   return (
//     <DataContext.Provider value={context}>
//       { props.children }
//     </DataContext.Provider>
//   );
// }

// export default DataContext;