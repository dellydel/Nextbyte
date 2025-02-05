import { createTheme } from "@mui/material/styles";
import { DM_Sans } from "next/font/google";

const dnSans = DM_Sans({ subsets: ["latin"] });

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
			fontFamily: dnSans.style.fontFamily,
		},
	},
});

export default theme;
