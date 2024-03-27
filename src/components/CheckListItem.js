import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Typography } from "@mui/material";

const container = {
	alignItems: "flex-start",
	display: "flex",
	flexDirection: "column",
	gap: "13px",
	position: "relative",
};

const header = {
	alignItems: "center",
	display: "flex",
	gap: "13px",
	position: "relative",
};

const headerText = {
	color: "#2b2d42",
	flex: 1,
	fontSize: "18px",
	fontWeight: 600,
	letterSpacing: "-0.36px",
	lineHeight: "27px",
	position: "relative",
};

const text = {
	color: "#2b2d429",
	flex: 1,
	fontSize: "16px",
	fontWeight: 400,
	letterSpacing: "-0.32px",
	lineHeight: "22.4px",
	mt: "-1px",
	position: "relative",
};

const bodyWrapper = {
	alignItems: "flex-start",
	alignSelf: "stretch",
	display: "flex",
	flex: "0 0 auto",
	gap: "8px",
	p: "0px 0px 0px 46px",
	position: "relative",
	width: "100%",
};

const CheckListItem = ({ item }) => {
	return (
		<Box component="div" sx={container}>
			<Box component="div" sx={header}>
				<VerifiedIcon height={32} width={32} color="primary" />
				<Typography component={"div"} sx={headerText}>
					{item.header}
				</Typography>
			</Box>
			<Box component="div" sx={bodyWrapper}>
				<Typography component={"p"} sx={text}>
					{item.body}
				</Typography>
			</Box>
		</Box>
	);
};

export default CheckListItem;
