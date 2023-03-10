import { Link } from 'react-router-dom';
import classes from './HeaderNav.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const HeaderNav = () => {
  return (
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
                <li>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                  to='/find-city'
                >
                  Search For Cities
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