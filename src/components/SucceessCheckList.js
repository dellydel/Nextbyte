import React from "react";
import { Box } from "@mui/material";
import { successChecklist } from "../data/homeContent";
import CheckListItem from "./CheckListItem";

const container = {
	alignItems: "flex-start",
	display: "flex",
	flexDirection: "column",
	gap: 5,
	position: "relative",
	width: { xs: 1, md: "486px" },
};

export const SuccessCheckList = () => {
	return (
		<Box component="div" sx={container}>
			{successChecklist.map((item) => (
				<Box component="div" key={item.id}>
					<CheckListItem item={item} />
				</Box>
			))}
		</Box>
	);
};
