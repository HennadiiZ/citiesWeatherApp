import CitiesList from '../components/CitiesList/CitiesList';
import {  useState, useEffect } from 'react';
import { fetchCities } from '../_lib/api';
import Container from '@mui/material/Container';
// import { useContext } from 'react';
// import DataContext from '../_store/data-context'; 

const AllCitiesPage = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const cityCtx = useContext(DataContext); //

  useEffect(() => {
    setIsLoading(true);    
    fetchCities(setLoadedData, setIsLoading);              
  }, []);

  return (
    <section>
      <Container maxWidth="lg" component="main">
        {isLoading && 'Loading...'}
        {!isLoading && loadedData.length === 0 && <p>No added cities.</p>}
        {!isLoading && loadedData.length > 0 && <CitiesList cities={loadedData}/>}
      </Container>
    </section>  
  );
}

export default AllCitiesPage;