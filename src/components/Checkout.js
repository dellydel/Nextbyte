import React, { Suspense } from "react";
import { Box } from "@mui/material";
import CheckoutComp from "./CheckoutComp";

const wrapper = {
	padding: 3,
	pt: 0,
	borderRadius: 3,
	boxShadow: 3,
	height: 1200,
	minWwidth: 1200,
	display: "flex",
	justifyContent: "center",
	alignItems: "start",
	overflowY: "auto",
};
const CheckoutForm = ({ course }) => {
	return (
		<Box sx={wrapper}>
			<Suspense>
				<CheckoutComp course={course} />
			</Suspense>
		</Box>
	);
};

export default CheckoutForm;
