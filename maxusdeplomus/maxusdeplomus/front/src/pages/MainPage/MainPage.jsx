import {Grid, Paper, ThemeProvider} from "@mui/material";
import {theme} from "../../utils/palette";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import StarIcon from '@mui/icons-material/StarBorder';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import avatar from "../../static/images/avatar.jpg"
import HeaderContainer from "../components/headerContainer";
import Footer from "../components/Footer";

function MainPage(props) {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <HeaderContainer/>
                <Paper style={{marginTop: "3.5%", padding: "2%"}}
                       sx={{
                           position: 'relative',
                           backgroundColor: 'grey.800',
                           color: '#fff',
                           mb: 4,
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'center',
                           padding: 0,
                           backgroundImage: `url(https://images.unsplash.com/photo-1596496181871-9681eacf9764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80)`,
                       }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            backgroundColor: 'rgba(0,0,0,.3)',
                        }}
                    />
                    <Grid container>
                        <Grid item md={6}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    p: {xs: 3, md: 6},
                                    pr: {md: 0},
                                }}
                            >
                                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                    Lorem ipsum
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standa
                                    rd dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularis
                                    ed in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </Typography>
                                <Link variant="subtitle1" href="diploma/diploma/front/src/pages/MainPage/MainPage#">
                                    <Button variant={'contained'} size={'large'}>
                                        Спробувати
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
                <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
                <CssBaseline/>
                {/* Hero unit */}
                <Container disableGutters maxWidth="sm" component="main" sx={{pt: 8, pb: 6}}>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Pricing
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" component="p">
                        Quickly build an effective pricing table for your potential customers with
                        this layout. It&apos;s built with default MUI components with little
                        customization.
                    </Typography>
                </Container>
                {/* End hero unit */}
                <Container maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {props.courses.slice(0, 3).map((course) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid
                                item
                                key={course.name}
                                xs={12}
                                sm={course.name === 'Enterprise' ? 12 : 6}
                                md={4}
                            >
                                <Card style={{
                                    backgroundImage: `url(${course.image})`,
                                    backgroundSize: '95%',
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}>
                                    <CardHeader
                                        title={course.name}
                                        titleTypographyProps={{align: 'center'}}
                                        action={course.name === 'Pro' ? <StarIcon/> : null}
                                        subheaderTypographyProps={{
                                            align: 'center',
                                        }}
                                        sx={{
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light'
                                                    ? theme.palette.grey[200]
                                                    : theme.palette.grey[700],
                                        }}
                                    />
                                    <CardContent style={{backgroundColor: 'rgba(0,0,0,.6)', color: "white"}}>
                                        <ul>

                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                            >
                                                {course.description.substr(0, 500)}
                                            </Typography>
                                        </ul>
                                    </CardContent>
                                    <CardActions style={{display: 'flex', justifyContent: "center"}}>
                                        <Link href={`/course/${course.name}`}>
                                            <Button size="large" variant={"contained"}>
                                                Переглянути
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container maxWidth={'md'} style={{marginTop: "5%"}}>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        marginBottom={'10%'}
                    >
                        Про мене
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        style={{marginBottom: "10%"}}
                    >
                        <Grid item xs>
                            <Typography align={"left"} variant={'h6'}>
                                Quickly build
                            </Typography>
                            <Typography align={"left"}>
                                Quickly build an effective pricing table for your potential customers with
                                this layout. It&apos;s built with default MUI components with little
                                customization.Quickly build an effective pricing table for your potential customers with
                                this layout. It&apos;s built with default MUI components with little
                                customization.
                            </Typography>
                            <Typography align={"left"} variant={'h6'} marginTop={"4%"}>
                                Quickly build
                            </Typography>
                            <Typography align={"left"}>
                                Quickly build an effective pricing table for your potential customers with
                                this layout. It&apos;s built with default MUI components with little
                                customization.Quickly build an effective pricing table for your potential customers with
                                this layout. It&apos;s built with default MUI components with little
                                customization.
                            </Typography>

                        </Grid>
                        <Grid item xs>
                            <img style={{maxWidth: '60%', float: "right"}} src={avatar} alt=""/>
                        </Grid>
                    </Grid>
                </Container>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default MainPage