import CitiesList from '../components/CitiesList/CitiesList';
import {  useState, useEffect } from 'react';
import { fetchData } from '../_lib/api';

const AllCitiesPage = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);    
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