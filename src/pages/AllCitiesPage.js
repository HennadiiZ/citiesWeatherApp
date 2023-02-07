import CitiesList from '../components/CitiesList/CitiesList';
import { URL, API_KEY, URL_list } from '../constants/constants';
import {  useState, useEffect } from 'react';
import {getListOfCities} from '../_lib/api'

const CITIES_DATA = [
//   { 
//     name: 'Calgary', 
//     weatherString: '+5', 
//     id: 'p1', 
//     main: {temp: 282.35, feels_like: 280.77, temp_min: 281.96, temp_max: 282.53, pressure: 1025},
//     weather: [{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '03d'}] 
//   },
//   { 
//     name: 'Halifax', 
//     weatherString: '+15', 
//     id: 'p2', 
//     main: {temp: 300, feels_like: 280.77, temp_min: 281.96, temp_max: 282.53, pressure: 1025},
//     weather: [{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'}] 
//   },
//   { 
//     name: 'Vancouver', 
//     weatherString: '+15', 
//     id: 'p3', 
//     main: {temp: 310, feels_like: 280.77, temp_min: 281.96, temp_max: 282.53, pressure: 1025},
//     weather: [{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '02d'}] 
//   },
];

const AllCitiesPage = () => {

    const [loadedData, setLoadedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cityName = 'dnipro';

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
          const response = await fetch(`${URL_list}${API_KEY}`);
          const data = await response.json();
          setLoadedData(data.list);
          setIsLoading(false);
        };
          
        fetchData();                 
    }, []);

    console.log(loadedData);

    return (
      <>
        <CitiesList cities={CITIES_DATA}/>
        {isLoading && 'Loading...'}
        {!isLoading && loadedData.length === 0 && <p>No added cities.</p>}
        {!isLoading && loadedData.length > 0 && <CitiesList cities={loadedData}/>}
      </>  
    );
}

  
  export default AllCitiesPage;