import React from "react";
import { Box } from "@mui/material";
import { SuccessCheckList } from "./SucceessCheckList";
import SuccessFeature from "./SuccessFeature";
import WelcomeFeature from "./WelcomeFeature";
import { WelcomeFrame } from "./WelcomeFrame";

const Features = () => {
	return (
		<Box>
			<WelcomeFeature
				imageUrl={"/images/sitting_with_laptop.png"}
				imageAlt={"woman sitting with laptop"}
			>
				<WelcomeFrame />
			</WelcomeFeature>
			<SuccessFeature
				imageUrl={"/images/sitting_with_laptop.png"}
				imageAlt={"woman sitting with laptop"}
			>
				<SuccessCheckList />
			</SuccessFeature>
		</Box>
	);
};

export default Features;
