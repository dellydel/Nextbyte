import React from "react";
import { Box } from "@mui/material";

const container = {
	display: "flex",
	alignItems: "center",
	gap: 10,
	justifyContent: "center",
	mx: { xs: 0, md: "auto" },
	px: { xs: 5, md: 0 },
	mt: { xs: 10, md: "140px" },
	width: { xs: 1, md: 1440 },
};

const Feature = ({ children }) => {
	return <Box sx={container}>{children}</Box>;
};

export default Feature;
