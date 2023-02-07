import CitiesList from '../components/CitiesList/CitiesList';
// import { API_KEY, URL_list } from '../constants/constants';
import {  useState, useEffect } from 'react';
import { fetchData } from '../_lib/api';

const AllCitiesPage = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
//   const cityName = 'dnipro';

  useEffect(() => {
    setIsLoading(true);  
    // const fetchData = async () => {
    //   const response = await fetch(`${URL_list}${API_KEY}`);
    //   const data = await response.json();
    //   setLoadedData(data.list);
    //   setIsLoading(false);
    // };
    // fetchData();    
    fetchData(setLoadedData, setIsLoading);              
  }, []);

  return (
    <section>
      {isLoading && 'Loading...'}
      {!isLoading && loadedData.length === 0 && <p>No added cities.</p>}
      {!isLoading && loadedData.length > 0 && <CitiesList cities={loadedData}/>}
    </section>  
  );
}

export default AllCitiesPage;