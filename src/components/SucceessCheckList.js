import React from "react";
import { Box } from "@mui/material";
import { successChecklist } from "../data/homeContent";
import CheckListItem from "./CheckListItem";

const container = {
	alignItems: "flex-start",
	display: "flex",
	flexDirection: "column",
	gap: "40px",
	position: "relative",
	width: "462px",
};

export const SuccessCheckList = () => {
	return (
		<Box component="div" sx={container}>
			{successChecklist.map((item) => (
				<CheckListItem item={item} />
			))}
		</Box>
	);
};
