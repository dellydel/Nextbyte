import React, { forwardRef } from "react";
import Box from "@mui/material/Box";
import Feature from "./Feature";
import SuccessFeature from "./SuccessFeature";
import WelcomeFeature from "./WelcomeFeature";

const Features = forwardRef((props, ref) => {
	return (
		<Box component="div" ref={ref}>
			<Feature>
				<WelcomeFeature />
			</Feature>
			<Feature>
				<SuccessFeature />
			</Feature>
		</Box>
	);
});

export default Features;
