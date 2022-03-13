import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../../../constants';
import { Box, IconButton } from '@material-ui/core'
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContext, themes } from '../../../contexts/themeContext';

// import { Navigate } from 'react-router-dom';

const Header = () => {

    const [darkMode, setDarkMode] = useState(true);

    const authToken = window.localStorage.getItem(AUTH_TOKEN);
    return (
        <Box component="div" sx={{ ml: 2, mr: 2, display: 'flex', justifyContent: 'space-between', backgroundColor: '#9c27b0' }} >
            <Box component="div" sx={{ display: 'flex', alignItems: 'center', pt: 1, pb: 1, fontWeight: 700, fontSize: 20, pl: 2 }}>
                <Link to="/" underline="none">
                    Todo
                </Link>
            </Box>

            <Box component="div" sx={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-end', pt: 1, pb: 1, pr: 2 }} className="flex flex-fixed">
                <Box component='div'>
                    <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                            <IconButton
                                onClick={() => {
                                    setDarkMode(!darkMode);
                                    changeTheme(darkMode ? themes.light : themes.dark);
                                }}
                            >
                                {darkMode ? <Brightness3Icon fontSize="medium" /> : <LightModeIcon fontSize="medium" />}
                            </IconButton>
                        )}
                    </ThemeContext.Consumer>
                </Box>

                {authToken ? (
                    <Box component="div"
                        sx={{ fontWeight: 700, fontSize: 20, color: 'white', display: 'flex', alignItems: 'center' }}
                        onClick={() => {
                            window.localStorage.removeItem(AUTH_TOKEN);
                            // doesnt work
                            // return <Navigate to='/' />;
                            window.location.href = '/login';
                        }}
                    >
                        Logout
                    </Box>
                ) : (
                    <>
                        <Box component='div' sx={{ display: 'flex', alignItems: 'center' }}>
                            <Link
                                to="/register"
                                className="headerLink"
                            >
                                register
                            </Link>
                            <Box component="span" sx={{ ml: 2, mr: 2 }} className="ml1">|</Box>
                            <Link
                                to="/login"
                                className="headerLink"
                            >
                                login
                            </Link>
                        </Box>
                    </>

                )}
            </Box>
        </Box>
    );
};

export default Header;