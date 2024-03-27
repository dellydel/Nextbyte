import React from "react";
import VerifiedIcon from "@mui/icons-material/VerifiedOutlined";
import { Box, Typography } from "@mui/material";
import {
	header,
	text,
	headerText,
	container,
	bodyWrapper,
} from "../styles/checkListItem";

const CheckListItem = ({ item }) => {
	return (
		<Box component="div" sx={container}>
			<Box component="div" sx={header}>
				<VerifiedIcon color="primary" />
				<Typography variant={"div"} sx={headerText}>
					{item.header}
				</Typography>
			</Box>
			<Box component="div" sx={bodyWrapper}>
				<Typography variant={"p"} sx={text}>
					{item.body}
				</Typography>
			</Box>
		</Box>
	);
};

export default CheckListItem;
