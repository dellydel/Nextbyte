import "@fontsource/dm-sans/latin.css";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#3A86FF",
		},
		secondary: {
			main: "#58BEC6",
		},
	},
	typography: {
		allVariants: {
			fontFamily: "DM Sans",
		},
	},
});

export default theme;
