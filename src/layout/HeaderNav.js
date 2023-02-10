import { Link, NavLink } from 'react-router-dom';
import classes from './HeaderNav.module.css';

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
            <NavLink to='/cities/:cityId'>No City</NavLink>
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