import React, { useState } from 'react';

const DataContext = React.createContext({
  cities: [],
  totalCities: 0,
  addCity: (chosenCity) => {},
  removeCity: (id) => {},
  itemIsSelected: (id) => {}
});

export const DataContextProvider = (props) => {
  const [addedCities, setAddedCities] = useState([]);

  const addCityHandler = (chosenCity) => {
    setAddedCities((prevCity) => {
      return prevCity.concat(chosenCity);
    });
  };

  const removeCityHandler = (itemId) => {
    setAddedCities((prevCity) => {
      return prevCity.filter(item => item.id !== itemId);
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
    itemIsSelected: itemIsSelectedHandler
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