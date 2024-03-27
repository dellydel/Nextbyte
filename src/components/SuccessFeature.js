import React from "react";
import { Box } from "@mui/material";

const featureContainer = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	mx: "200px",
	mt: "140px",
	maxWidth: "1440px",
};

const SuccessFeature = ({ imageUrl, imageAlt, children }) => {
	return (
		<Box sx={featureContainer}>
			<Box
				width={"462px"}
				height={"472px"}
				component={"img"}
				src={imageUrl}
				alt={imageAlt}
			/>
			{children}
		</Box>
	);
};

export default SuccessFeature;
