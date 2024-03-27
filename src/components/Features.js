import React from "react";
import Feature from "./Feature";
import SuccessFeature from "./SuccessFeature";
import WelcomeFeature from "./WelcomeFeature";

const Features = () => {
	return (
		<>
			<Feature>
				<WelcomeFeature />
			</Feature>
			<Feature>
				<SuccessFeature />
			</Feature>
		</>
	);
};

export default Features;
