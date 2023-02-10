import { useParams } from 'react-router-dom';
import CityDetails from '../components/CityDetails/CityDetails';
import React from 'react'

const DetailsCityPage = () => {
  const params = useParams();
  // console.log(params.cityId);

  return (
    <React.Fragment>
      <CityDetails cityId={params.cityId}/>
      {/* <p>{params.cityId}</p> */}
      {/* <p>ChosenCityPage</p> */}
    </React.Fragment>
  );
};

export default DetailsCityPage;