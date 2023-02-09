import { createTheme } from "@mui/material";
import { unstable_getThemeValue } from "@mui/system";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {main: "#fff149" },
    },
    components:{
        MuiButton:{
            styleOverrides: {
                root: {
                    borderRadius: 25
                }
            }
        }
    },
    typography: {
        button: {
            fontSize: "1rem",

        }
    }
});

export default theme;