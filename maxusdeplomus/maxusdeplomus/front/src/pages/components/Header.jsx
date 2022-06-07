import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SchoolIcon from '@mui/icons-material/School';
import {Link} from "@mui/material";
import {useNavigate} from "react-router-dom";


export default function Header(props) {
    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const logoutHandler = (e) => {
        e.preventDefault();
        props.logoutUser()
        navigate('/')
    }


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <SchoolIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 5,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        МУРАКУРС
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            <MenuItem>
                                <Link href={'/courses'} underline={'none'}>
                                    <Button style={{textAlign: "center"}}>Курси</Button>
                                </Link>
                            </MenuItem>
                            {props.authUser.isAuth ?
                                <MenuItem>
                                    <Link href={'/library'} underline={'none'}>
                                        <Button style={{textAlign: "center"}}>Бібліотека</Button>
                                    </Link>
                                </MenuItem> : null

                            }

                            <MenuItem>
                                <Link href={'/demo'} underline={'none'}>
                                    <Button style={{textAlign: "center"}}>Демо</Button>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <SchoolIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        МУРАКУРС
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Link href={'/courses'} underline={'none'}>
                            <Button
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                Курси
                            </Button>
                        </Link>
                        {props.authUser.isAuth ?
                            <Link href={'/library'} underline={'none'}>
                                <Button
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    Бібліотека
                                </Button>
                            </Link> :
                            null
                        }

                        <Link href={'/demo'} underline={'none'}>
                            <Button
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                Демо
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                            <Avatar/>
                        </IconButton>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {props.authUser.isAuth ?
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography onClick={logoutHandler} textAlign="center">Вийти</Typography>
                                </MenuItem> :
                                <Box>
                                    <Link href={'/registration'} underline={'none'}>
                                        <MenuItem>
                                            <Button style={{textAlign: "center"}}>Зареєструватись</Button>
                                        </MenuItem>
                                    </Link>
                                    <Link href={'/login'} underline={'none'}>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Button style={{textAlign: "center"}}>Увійти</Button>
                                        </MenuItem>
                                    </Link>

                                </Box>

                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
