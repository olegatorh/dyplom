import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../../utils/palette";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import {Paper} from "@mui/material";
import HeaderContainer from "../components/headerContainer";
import Footer from "../components/Footer";

export default function AddCourse(props) {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <HeaderContainer/>
                <Paper style={{marginTop: "3.5%", padding: "9% 1% 10% 2%"}}
                       sx={{
                           position: 'relative',
                           backgroundColor: 'grey.100',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'center',
                           padding: 0,

                       }}
                >
                    <Grid container justifyContent="space-between">
                        <Grid item md={6}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    p: {xs: 3, md: 6},
                                    pr: {md: 0},
                                }}
                            >
                                <Link mr={'3%'} variant="subtitle1"
                                      href="/courses">
                                    <Button variant={'text'} size={'small'}>
                                        Повернутися до курсів
                                    </Button>
                                </Link>
                                {props.userSettings.user.id
                                    ?
                                    <Link variant="subtitle1" href="/library">
                                        <Button variant={'text'} size={'small'}>
                                            Повернутися до бібліотеки
                                        </Button>
                                    </Link>
                                    : null

                                }
                                <Typography mt={'3%'} component="h1" variant="h3" color="inherit" gutterBottom>
                                    {props.course.name}
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph>
                                    {props.course.description}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    position: 'relative',
                                    p: {xs: 3, md: 6},
                                    pr: {md: 0},
                                }}
                            >
                                {props.userSettings.user.isAuth
                                    ?
                                    <Button variant={'contained'}
                                            onClick={() => (props.userSettings.updateUser(props.userSettings.user.username, props.userSettings.user.password, props.course.id))}
                                            size={'large'}>
                                        Додати до бібліотеки
                                    </Button>
                                    :
                                    <Link variant="subtitle1" href="/login">
                                        <Button variant={'contained'} size={'large'}>
                                            Увійти
                                        </Button>
                                    </Link>
                                }

                            </Box>
                        </Grid>
                        <Grid item md={3}>
                        </Grid>
                        <Grid item marginTop={"5%"} md={3}>
                            <img style={{maxWidth: '70%'}}
                                 src={props.course.image}
                                 alt=""/>
                        </Grid>
                    </Grid>
                </Paper>
                <Footer/>
            </div>
        </ThemeProvider>

    )
}

