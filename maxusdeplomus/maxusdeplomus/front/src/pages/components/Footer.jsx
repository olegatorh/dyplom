import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../../utils/palette";
import Typography from "@mui/material/Typography";
import {CssBaseline, Paper} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


export default function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component="footer"
                sx={{
                    py: 1,
                    px: 2,
                    mt: 'auto',
                    color: 'white',
                    backgroundColor: (theme.palette.primary.main)
                }}
            >
                <Container maxWidth="xl">
                    <Typography variant="body1" align={"center"}>
                        Designed and Created by Max Muraviov
                    </Typography>
                </Container>
            </Box>
        </ThemeProvider>

    )
}