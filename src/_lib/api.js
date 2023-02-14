import { API_KEY, CITIES_fb, URL_city } from '../constants/constants';

// working!!!
// export const fetchData = async (setLoadedData, setIsLoading) => {
//   const response = await fetch(`${URL_list}${API_KEY}`);
//   const data = await response.json();
//   setLoadedData(data.list);
//   setIsLoading(false);
// };

export const fetchCities = async (setLoadedData, setIsLoading) => {

  // const response = await fetch(`${CITIES_fb}`);
  // const data = await response.json();

  // const listOfCities = [];
  // for(const key in data) {
  //   listOfCities.push(data[key]);
  // }
  // setIsLoading(false);
  // setLoadedData(listOfCities);

  try {
    const response = await fetch(`${CITIES_fb}`);
    if (!response.ok) {
      throw new Error("Cities not found");
    }
    const data = await response.json();
  
    const listOfCities = [];
    for(const key in data) {
      listOfCities.push(data[key]);
    }
    setIsLoading(false);
    setLoadedData(listOfCities);
  } catch (error) {
    console.error("Error:", error.message);
  }
};


export function fetchCityByName(city, setLoadedData) {
  fetch(
    // `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    `${URL_city}${city}&appid=${API_KEY}`
  )
  .then((response) => {

    if (!response.ok) {
      throw new Error("City not found");
    }

    return response.json()
  })
  .then((data) => {
    const CITIES_DATA = []
    CITIES_DATA.push(data);
    setLoadedData(CITIES_DATA)

    // if (CITIES_DATA.length > 1) {
    //   CITIES_DATA.shift();
    // }
  })
  .catch(error => {
    console.log('error');
    console.error(error);
  });
};


export function addCityToList(cityData) {
  fetch(
    // 'https://locations-8d6c2-default-rtdb.firebaseio.com/cities.json',
    `${CITIES_fb}`,
    {
      method: 'POST',
      body: JSON.stringify(cityData),
      headers: {'Content-Type': 'application/json'}
    }
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error("Dreadful error");
    }
    return response.json();
  })
  .catch(error => {
    console.log('error !!!!!!');
    console.error(error);
  });
}


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


