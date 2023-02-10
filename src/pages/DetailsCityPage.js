import { useParams } from 'react-router-dom';
import CityDetails from '../components/CityDetails/CityDetails';
import React from 'react'
import Container from '@mui/material/Container';

const DetailsCityPage = () => {
  const params = useParams();

  return (
    <section>
      <Container maxWidth="lg" component="main">
        <CityDetails cityId={params.cityId}/>
      </Container>
    </section>
  );
};

export default DetailsCityPage;