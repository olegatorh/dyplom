import HeaderContainer from "../components/headerContainer";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../../utils/palette";
import Footer from "../components/Footer";
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SubscribedCourse(props) {
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
                                <Link variant="subtitle1" href="/library">
                                    <Button variant={'text'} size={'small'}>
                                        Повернутися до бібліотеки
                                    </Button>
                                </Link>
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
                    <Grid container alignItems={'center'} direction={'column'}>
                        <Grid item xs={'auto'} style={{width: "100%", minHeight: '60px'}}>
                            <iframe title={'video'}
                                    style={{width: "100%", minHeight: '500px'}}
                                    src={props.course.video}
                                    frameBorder="0" marginHeight="0"
                                    marginWidth="0">Завантаження…
                            </iframe>
                        </Grid>
                        <Grid item xs={'auto'}  style={{marginTop: "5%", width: "100%"}}>
                            <iframe style={{
                                width: "100%"
                            }}      title={'quiz'}
                                    src={props.course.quiz}
                                    height="2802" frameBorder="0" marginHeight="0"
                                    marginWidth="0">Завантаження…
                            </iframe>
                        </Grid>
                    </Grid>


                </Paper>
                <Footer/>
            </div>
        </ThemeProvider>

    )
}
