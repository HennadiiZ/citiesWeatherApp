import { useRef } from 'react';

const SearchInput = ({ enteredCity }) => {
  const searchCityInputRef = useRef();
  let searchCity

  const submitFormHandler = (event) => {
    event.preventDefault();
    searchCity = searchCityInputRef.current.value;
    enteredCity(searchCity); 
  }

  return (
    <>
    {/* <label htmlFor="">Search for a city</label> */}
      <input  
        placeholder="Find a city ..." 
        id="city"
        type='text'
        ref={searchCityInputRef}
        onBlur={submitFormHandler}
      />
    </>
  )
};

export default SearchInput;