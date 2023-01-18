import { createTheme } from "@mui/material";
import { unstable_getThemeValue } from "@mui/system";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {main: "#fff149" },
    },
});

export default theme;