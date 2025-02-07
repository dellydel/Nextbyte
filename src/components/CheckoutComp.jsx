import React from "react";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	`${import.meta.env.VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
);

export const close = {
	display: "flex",
	justifyContent: "flex-end",
	alignItems: "center",
	flexDirection: "row",
	mr: 6,
	mb: 2,
};

const CheckoutComp = ({ course, setShowCheckout }) => {
	const [clientSecret, setClientSecret] = useState();

	useEffect(() => {
		fetch(`${import.meta.env.VITE_PUBLIC_API_GATEWAY_BASE_URL}/pay`, {
			method: "POST",
			body: JSON.stringify({
				product_id: course.id,
				course_name: course.name,
				price: course.price,
				price_id: course.priceLink,
			}),
		})
			.then((res) => res.json())
			.then((secret) => {
				setClientSecret(secret);
			});
	}, []);

	return (
		<Box sx={{ width: 1000 }}>
			<Box sx={close}>
				<IconButton
					color="inherit"
					aria-label="close"
					onClick={() => setShowCheckout(false)}
				>
					<CloseIcon />
				</IconButton>
			</Box>
			{clientSecret && (
				<EmbeddedCheckoutProvider
					stripe={stripePromise}
					options={{ clientSecret }}
				>
					<EmbeddedCheckout />
				</EmbeddedCheckoutProvider>
			)}
		</Box>
	);
};

export default CheckoutComp;
