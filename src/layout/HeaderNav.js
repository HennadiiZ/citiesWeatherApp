import { Link } from 'react-router-dom';
import classes from './HeaderNav.module.css';
// import { Fragment } from 'react';
// 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const HeaderNav = () => {
  return (
    // <header className={classes.header}>
    //   <Link className={classes.logo} to='/'>Cities Weather App</Link>
    //   <nav>
    //     <ul>
    //       <li>
    //         <NavLink to='/cities'>Cities</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/cities/:cityId'>No City</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/find-city'>find City</NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </header> 

  <header className={classes.header}>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Container maxWidth="lg" component="main">
      <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="p" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <Link className={classes.logo} to='/'>Cities Weather App</Link>
          </Typography>
          <nav>
            <ul>
              {/* <li>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                  to='/cities'
                >
                  Cities
                </Link>
              </li> */}
              {/* <li>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                  to='/cities/:cityId'
                >
                  No City
                </Link>
              </li> */}
              <li>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
                to='/find-city'
              >
                Find Cities
              </Link>
              </li>
            </ul>
          </nav>
      </Toolbar>
      </Container>
    </AppBar>
  </header> 
  );
};

export default HeaderNav;