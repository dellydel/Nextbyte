import React from "react";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Welcome from "./Welcome";

const WelcomeFeature = () => {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<>
			{!isMobile && (
				<Box
					width={"462px"}
					height={"472px"}
					component={"img"}
					src={"/images/sitting_with_laptop.png"}
					alt={"woman sitting with laptop"}
				/>
			)}
			<Welcome />
		</>
	);
};

export default WelcomeFeature;
