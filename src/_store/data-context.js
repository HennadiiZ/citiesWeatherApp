import React, { useState, useEffect, useMemo } from 'react';
import { fetchCities } from '../_lib/api';

const DataContext = React.createContext({
  cities: [],
  totalCities: 0,
  loading: false,
  addCity: (newCity) => {},
  removeCity: (id) => {},
});

export const DataContextProvider = (props) => {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {  
    setIsLoading(true);  
    fetchCities(setLoadedData, setIsLoading); 
  }, []);

  const addCityHandler = (newCity) => {
    setLoadedData((prevCity) => {
      return prevCity.concat(newCity);
    });
    // setLoadedData([...loadedData, newCity]);
  };

  const removeCityHandler = (itemId) => {
    // setLoadedData((prevCity) => {
    //   return prevCity.filter(item => item.id !== itemId);
    // }); 
    setLoadedData((prevCity) => {
      return prevCity.filter(item => item.id !== itemId);
    }); 
  };

  // const context = useMemo(
  //   () => ({
  //     cities: loadedData, 
  //     totalCities: loadedData.length, 
  //     loading: isLoading
  //   }),
  //   [loadedData, isLoading]
  // );

  const context= {
    cities: loadedData, 
    totalCities: loadedData.length, 
    loading: isLoading,
    addCity: addCityHandler,
    removeCity: removeCityHandler,
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