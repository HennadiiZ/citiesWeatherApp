import { useRef } from 'react';
import TextField from '@mui/material/TextField';

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
      <TextField 
        id="outlined-basic" 
        label="Search for a city ..." 
        variant="outlined" 
        type='text'
        inputRef={searchCityInputRef}
        onBlur={submitFormHandler}
        fullWidth
      />
    </>
  )
};

export default SearchInput;

/* 
<input  
  placeholder="Search for a city ..." 
  id="city"
  type='text'
  ref={searchCityInputRef}
  onBlur={submitFormHandler}
/> 
*/