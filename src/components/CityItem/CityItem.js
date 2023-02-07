import classes from './CityItem.module.css';
import { Link } from 'react-router-dom';

const CityItem = (props) => {
  return (
    <li className={classes.item}>
      {/* <Link to={`/cities/:${props.id}`} className={classes.link}> */}
      <Link to={`/cities/${props.id}`} className={classes.link}>
        <div className={classes.item__body}>
          <div className={classes.content}>
            <h3>{props.name}</h3>
            <p>{props.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} alt="Weather Icon"></img>
            {/* <p>Temperature: { Math.round(props.main.temp - 273)} &#8451;</p> */}
            <p>Temperature: { Math.round(props.main.temp)} &#8451;</p>
          </div>
          <div className={classes.actions}>
            <button>Update weater</button>
          </div>
        </div>
      </Link>
    </li>
  );
};
  
export default CityItem;