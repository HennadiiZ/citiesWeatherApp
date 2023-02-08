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
    <label htmlFor='city'>Search for a city</label>
      <input  
        placeholder="Search for a city ..." 
        id='city'
        type='text'
        ref={searchCityInputRef}
        onBlur={submitFormHandler}
      />
    </>
  )
};

export default SearchInput;