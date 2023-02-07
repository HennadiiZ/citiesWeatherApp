import classes from './CityDetails.module.css';
import { useParams } from 'react-router-dom';
import {  useState, useEffect } from 'react';
import { URL, API_KEY, URL_list } from '../../constants/constants';

// const CITIES_DATA = [
//   { 
//     name: 'Calgary', 
//     weatherString: '+5', 
//     id: 'p1', 
//     main: {temp: 282.35, feels_like: 280.77, temp_min: 281.96, temp_max: 282.53, pressure: 1025},
//     weather: [{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '03d'}] 
//   },
//   { 
//     name: 'Halifax', 
//     weatherString: '+15', 
//     id: 'p2', 
//     main: {temp: 300, feels_like: 280.77, temp_min: 281.96, temp_max: 282.53, pressure: 1025},
//     weather: [{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'}] 
//   },
//   { 
//     name: 'Vancouver', 
//     weatherString: '+15', 
//     id: 'p3', 
//     main: {temp: 310, feels_like: 280.77, temp_min: 281.96, temp_max: 282.53, pressure: 1025},
//     weather: [{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '02d'}] 
//   },
//   { 
//     name: 'London', 
//     weatherString: '+15', 
//     id: 2643743, 
//     main: 
//     {temp: 282.91, feels_like: 282.48, temp_min: 281.64, temp_max: 284.21, pressure: 1039},
//     weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d'}] 
//   },
// ];

const CityDetails = (props) => {

    const [loadedData, setLoadedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cityName = 'dnipro';

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
          const response = await fetch(`${URL_list}${API_KEY}`);
          const data = await response.json();
          setLoadedData(data.list);
          setIsLoading(false);
        };
          
        fetchData();                 
    }, []);

    console.log(loadedData);
    
//   const params = useParams();
//   console.log(params.cityId);

  // const city = CITIES_DATA.find(item =>  item.id ===  props.cityId)
//   const city = CITIES_DATA.find(item =>  item.id.toString() ===  props.cityId.replace(/\s|:/g,""));

  const city = loadedData.find(item =>  item.id.toString() ===  props.cityId.replace(/\s|:/g,""));

  if (!city) {
    return <p>No city found!</p>;
  }

  return (
    <section>
      {/* <p> This is ID: {city.cityId}</p> */}
      City Details
      <div className={classes.item__body}>
          <div className={classes.content}>
            <h3>{city.name}</h3>
            <p>{city.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="Weather Icon"></img>
            <p>Temperature: { Math.round(city.main.temp - 273)} &#8451;</p>
          </div>
          <div className={classes.actions}>
            <button>Update weater</button>
          </div>
        </div>
    </section>
  );
};

export default CityDetails;