import CitiesList from '../components/CitiesList/CitiesList';
import Container from '@mui/material/Container';
import { useContext } from 'react';
import DataContext from '../_store/data-context'; 

const AllCitiesPage = () => {
  const cityCtx = useContext(DataContext); 

  return (
    <section>
      <Container maxWidth="lg" component="main">        
        {cityCtx.loading && 'Loading...'}
        {!cityCtx.loading && cityCtx.cities.length === 0 && <p>No added cities.</p>}
        {!cityCtx.loading && cityCtx.cities.length > 0 && <CitiesList cities={cityCtx.cities}/>}
      </Container>
    </section>  
  );
}

export default AllCitiesPage;