import React, { Suspense } from "react";
import { Box } from "@mui/material";
import CheckoutComp from "./CheckoutComp";

const wrapper = {
	backgroundColor: "white",
	p: 5,
	borderRadius: 3,
	boxShadow: 3,
	height: 900,
	width: 1100,
	display: "flex",
	justifyContent: "center",
	alignItems: "start",
	overflowY: "auto",
};
const CheckoutForm = ({ course, setShowCheckout }) => {
	return (
		<Box sx={wrapper}>
			<Suspense>
				<CheckoutComp course={course} setShowCheckout={setShowCheckout} />
			</Suspense>
		</Box>
	);
};

export default CheckoutForm;
