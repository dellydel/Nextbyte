import { Box } from "@mui/material";

const container = {
	display: "flex",
	alignItems: "center",
	gap: 10,
	justifyContent: "center",
	mx: { xs: 0, md: "auto" },
	px: { xs: 5, md: 0 },
	mt: { xs: 10, md: "140px" },
	width: "100%",
	maxWidth: 1440,
	boxSizing: "border-box",
};

const Feature = ({ children }) => {
	return <Box sx={container}>{children}</Box>;
};

export default Feature;
