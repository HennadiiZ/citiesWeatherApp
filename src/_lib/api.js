import { API_KEY, URL_list } from '../constants/constants';

//
export const fetchData = async (setLoadedData, setIsLoading) => {
  const response = await fetch(`${URL_list}${API_KEY}`);
  const data = await response.json();
  setLoadedData(data.list);
  setIsLoading(false);
};






//
export const getACity = [];
export const fetchCityByName = (city) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
  .then((response) => response.json())
  .then((data) => {
    console.log('data', data);
    // getACity.push(data);
    // console.log('getACity+++', getACity);
    // console.log('getACity', getACity);
  })
  
};


