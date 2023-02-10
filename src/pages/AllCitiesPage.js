import CitiesList from '../components/CitiesList/CitiesList';
import {  useState, useEffect } from 'react';
import { fetchData } from '../_lib/api';

// import { useContext } from 'react';
// import DataContext from '../_store/data-context'; 

const AllCitiesPage = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const cityCtx = useContext(DataContext); //

  useEffect(() => {
    setIsLoading(true);    
    fetchData(setLoadedData, setIsLoading);              
  }, []);

  return (
    <section>
      {isLoading && 'Loading...'}
      {!isLoading && loadedData.length === 0 && <p>No added cities.</p>}
      {!isLoading && loadedData.length > 0 && <CitiesList cities={loadedData}/>}

      {/* {!isLoading && cityCtx.cities.length === 0 && <p>No added cities.</p>}
      {!isLoading && cityCtx.cities.length > 0 && <CitiesList cities={cityCtx.cities}/>} */}
    </section>  
  );
}

export default AllCitiesPage;