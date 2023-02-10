import { API_KEY, URL_list } from '../constants/constants';

// working!!!
// export const fetchData = async (setLoadedData, setIsLoading) => {
//   const response = await fetch(`${URL_list}${API_KEY}`);
//   const data = await response.json();
//   setLoadedData(data.list);
//   setIsLoading(false);
// };



export const fetchData = async (setLoadedData, setIsLoading) => {
  const response = await fetch('https://locations-8d6c2-default-rtdb.firebaseio.com/cities.json');
  const data = await response.json();

  const listOfCities = [];
  setIsLoading(false);

  for(const key in data) {
    listOfCities.push(data[key]);
  }
  setLoadedData(listOfCities);
};


//
// export const fetchCityByName = (city) => {
//   fetch(
//     `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//   )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('data', data);
//   })
// };


