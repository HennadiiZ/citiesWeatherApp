import CitiesList from '../components/CitiesList/CitiesList';
import {  useState, useEffect } from 'react';
import { fetchData } from '../_lib/api';
import Container from '@mui/material/Container';

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

  // console.log(loadedData);

  return (
    <section>
      <Container maxWidth="lg" component="main">
        {isLoading && 'Loading...'}
        {!isLoading && loadedData.length === 0 && <p>No added cities.</p>}
        {!isLoading && loadedData.length > 0 && <CitiesList cities={loadedData}/>}
  
        {/* {!isLoading && cityCtx.cities.length === 0 && <p>No added cities.</p>}
        {!isLoading && cityCtx.cities.length > 0 && <CitiesList cities={cityCtx.cities}/>} */}
      </Container>
    </section>  
  );
}

export default AllCitiesPage;