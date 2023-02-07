import { URL, API_KEY, URL_list } from '../constants/constants';

const cityName = 'dnipro';

//my func

export async function getListOfCities() {
  const response = await fetch(`${URL_list}${API_KEY}`);
  const data = await response.json(); 
  
  return data.list;
}



//1
export async function getAllCities() {
  

  const response = await fetch(`${URL}weather?q=${cityName}&appid=${API_KEY}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not fetch cities.');
  }

  const cities = [];
  cities.push(data);

  const { name } = data;
  console.log('name', name);

  return cities;
}

//2
export async function getSingleCity(cityId) {
  const response = await fetch(`${URL}weather?q=${cityName}&appid=${API_KEY}`);
  // const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not fetch city.');
  }

  const loadedCity = {
    id: cityId,
    ...data,
  };

  return loadedCity;
}




//----------------
    // const city = 'London';
    // const cityName = 'dnipro';

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(`${URL}weather?q=${cityName}&appid=${API_KEY}`)
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then(data => {
    //       // console.log(data);
    //       // CITIES_DATA.push(data);
    //       // console.log('CITIES_DATA', CITIES_DATA);
    //       const cities = [];
    //       cities.push(data);
    //       // const { name } = data;
    //       // console.log('name', name);
    //       setLoadedData(cities);
    //       setIsLoading(false);
    //     });          
    // }, []);