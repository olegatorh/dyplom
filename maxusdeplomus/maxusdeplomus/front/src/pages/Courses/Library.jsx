import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../../utils/palette";
import HeaderContainer from "../components/headerContainer";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {CardActions, CardMedia, Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export default function Library(props) {
    let courses = props.courses.filter(course => {
        return props.user.courses.includes(course.id) ? course : null
    })
    return (
        <ThemeProvider theme={theme}>
            <div>
                <HeaderContainer/>
                <main style={{marginTop: "4%"}}>
                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Album layout
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                Something short and leading about the collection below—its contents,
                                the creator, etc. Make it short and sweet, but not too short so folks
                                don&apos;t simply skip over it entirely.
                            </Typography>
                            <Stack
                                sx={{pt: 4}}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                            </Stack>
                        </Container>
                    </Box>
                    <Container sx={{py: 8}} maxWidth="lg">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {courses.map((card) => (
                                <Grid item key={card.name} xs={12} sm={6} md={3}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: "center",
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <CardMedia
                                            component="img"

                                            image={card.image}
                                            alt="random"
                                        />
                                        <CardContent sx={{flexGrow: 1}}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.name}
                                            </Typography>
                                            <Typography>
                                                {card.description.substr(0, 80)}...
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link href={`/course/${card.name}`}>
                                                <Button size="large" variant={"contained"}
                                                        style={{marginBottom: "2%"}}>Переглянути</Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{marginBottom: "10%"}}
                    >
                        <Grid item>
                            <Typography  variant="h5" align="center" color="text.secondary" paragraph>
                                Щоб додати нові курси натисніть на кнопку нижче:
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Link href={`/courses`}>
                                <Button size="large" variant={"contained"}
                                        style={{marginBottom: "2%"}}>Перейти до курсів</Button>
                            </Link>
                        </Grid>

                    </Grid>
                </main>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

