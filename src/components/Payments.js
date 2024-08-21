import React, { useEffect, useState, useContext } from "react";
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	CircularProgress,
} from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { useRegistrationData } from "../hooks/useRegistrationData";

const Payments = () => {
	const { user } = useContext(AuthContext);
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
