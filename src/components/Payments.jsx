import React from "react";
import { Box } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useRegistrationData } from "../queries/useRegistrationData";

const Payments = () => {
	const user = useAuth();
	const {
		data: payments,
		isPending,
		isError,
		isSuccess,
		error,
	} = useRegistrationData(user);

	return (
		<Box sx={{ p: 3 }}>
			{payments.map((payment) => {
				return (
					<p>
						Course Name: {payment.course_name}, Date: {payment.created}, Amount:
						{payment.amount}
					</p>
				);
			})}
		</Box>
	);
};

export default Payments;
