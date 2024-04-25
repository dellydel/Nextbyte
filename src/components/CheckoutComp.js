"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Widgets } from "@mui/icons-material";
import { Box } from "@mui/material";
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
);

const CheckoutComp = ({ course }) => {
	const [clientSecret, setClientSecret] = useState();

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/pay`, {
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
		<Box>
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
