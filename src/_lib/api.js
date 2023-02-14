import { API_KEY, CITIES_fb, URL_city, JSON_add } from '../constants/constants';
//1
// export const fetchCities = async (setLoadedData, setIsLoading) => {
//   try {
//     const response = await fetch(`${CITIES_fb}`);
//     if (!response.ok) {
//       throw new Error("Cities not found");
//     }
//     const data = await response.json();
  
//     const listOfCities = [];
//     for(const key in data) {
//       listOfCities.push(data[key]);
//     }
//     setIsLoading(false);
//     setLoadedData(listOfCities);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// };





export const fetchCities = async (setLoadedData, setIsLoading) => {
  try {
    const response = await fetch(`${CITIES_fb}${JSON_add}`);
    if (!response.ok) {
      throw new Error("Cities not found");
    }
    const data = await response.json();
  
    const listOfCities = [];

    

    for(const key in data) {
      // console.log("+++", {itemId: key, ...data[key]});
      // listOfCities.push(data[key]);
      listOfCities.push({itemId: key, ...data[key]});
    }
    setIsLoading(false);
    setLoadedData(listOfCities);
    // console.log(listOfCities);
  } catch (error) {
    console.error("Error:", error.message);
  }
};






//2
export function fetchCityByName(city, setLoadedData) {
  fetch(`${URL_city}${city}&appid=${API_KEY}`)
  .then((response) => {

    if (!response.ok) {
      throw new Error("City not found");
    }

    return response.json()
  })
  .then((data) => {
    const CITIES_DATA = []
    CITIES_DATA.push(data);
    setLoadedData(CITIES_DATA);
  })
  .catch(error => {
    console.log('error');
    console.error(error);
  });
};
//3
export function addCityToList(cityData) {
  fetch(
    `${CITIES_fb}${JSON_add}`,
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
};