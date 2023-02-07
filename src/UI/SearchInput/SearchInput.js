import { useRef } from 'react';

const SearchInput = ({ enteredCity }) => {
  const searchCityInputRef = useRef();
  let searchCity

  const submitFormHandler = (event) => {
    event.preventDefault();
    searchCity = searchCityInputRef.current.value;
    // console.log(searchCity);
    enteredCity(searchCity); // start here
  }

  return (
    <>
    <label />
    <input  
      placeholder="Search a city ..." 
      ref={searchCityInputRef}
      onChange={submitFormHandler}
    />
    </>
  )
};

export default SearchInput;