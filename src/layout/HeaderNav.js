import { Link, NavLink } from 'react-router-dom';
import classes from './HeaderNav.module.css';
import SearchInput from '../UI/SearchInput/SearchInput';

const HeaderNav = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to='/'>Cities Weather App</Link>
      <nav>
        <ul>
          <li>
            <NavLink to='/cities'>Cities</NavLink>
          </li>
          <li>
            <NavLink to='/cities/:cityId'>City</NavLink>
          </li>
          <li>
            {/* <SearchInput enteredCity={enteredCity}/> // start here */}
            <SearchInput />
          </li>
          <li>
            <NavLink to='/find-city'>find City</NavLink> {/* // start here */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;