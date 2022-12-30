import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ContactsIcon from '@mui/icons-material/Contacts';
import Button from '@mui/material/Button';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  marginRight: '40px',
  borderRadius: '5px',
  padding: '5px 10px',
  border: '1px solid white',
};

const activeLinkStyle = {
  textDecoration: 'none',
  color: 'black',
  backgroundColor: 'white',
  padding: '5px 10px',
  marginRight: '40px',
  borderRadius: '5px',
};

const ApplicationBar = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}   >
      <AppBar position="static" >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <ContactsIcon/>
          </IconButton>
          <Typography variant="h5"component="div" sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>
          {!isLoggedIn ? (
            <>
              <Button color='inherit' startIcon={<AppRegistrationOutlinedIcon />}>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : linkStyle
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </Button>
              <Button  color='inherit' startIcon={<LoginIcon />} >
                <NavLink
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : linkStyle
                  }
                  to="/login"
                >
                  Log in
                </NavLink>
              </Button>
            </>
          ) : (
            <UserMenu />
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default ApplicationBar;