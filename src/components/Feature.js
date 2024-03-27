import React from "react";
import { Box } from "@mui/material";

const container = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	mx: "200px",
	mt: "140px",
	maxWidth: 1440,
};

const Feature = ({ children }) => {
	return <Box sx={container}>{children}</Box>;
};

export default Feature;
