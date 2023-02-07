import SearchInput from '../UI/SearchInput/SearchInput';
import { useState } from 'react';

const FindCityPage = () => {

  const [city, setCity] = useState(""); // 
  const enteredCity = (city) => { //
    console.log('message', city); // start here
    setCity(city)
  }; //

  return (
    <>
      <p>Find City Page</p>
      <SearchInput enteredCity={enteredCity}/>
    </>
  );
}

export default FindCityPage;