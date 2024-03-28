import React from "react";
import AutoStoriesOutlined from "@mui/icons-material/AutoStoriesOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VerifiedUserOutlined from "@mui/icons-material/VerifiedUserOutlined";
import { Typography, Box } from "@mui/material";
import { chooseUsCards } from "../data/homeContent";

const icons = {
	GroupsOutlinedIcon: <GroupsOutlinedIcon color="secondary" />,
	VerifiedUserOutlined: <VerifiedUserOutlined color="secondary" />,
	AutoStoriesOutlined: <AutoStoriesOutlined color="secondary" />,
};

const container = {
	mx: "auto",
	alignItems: "flex-start",
	display: "flex",
	gap: 2,
	position: "relative",
	width: 1040,
};

const cardStyle = {
	alignItems: "flex-start",
	backgroundColor: "#ffffff",
	borderRadius: "8px",
	boxShadow: "0px 2px 4px -2px #0000000f, 0px 4px 8px -2px #0000001a",
	display: "flex",
	flex: 1,
	flexDirection: "column",
	flexGrow: 1,
	gap: 3,
	justifyContent: "center",
	overflow: "hidden",
	padding: 3,
	position: "relative",
};
const header = {
	alignSelf: "stretch",
	color: "#2b2d42",
	fontSize: "18px",
	fontWeight: 600,
	letterSpacing: "-0.36px",
	lineHeight: "27px",
	marginTop: "-1px",
	position: "relative",
};

const body = {
	alignSelf: "stretch",
	color: "#2b2d429c",
	fontSize: "16px",
	fontWeight: 400,
	letterSpacing: "-0.32px",
	lineHeight: "22.4px",
	position: "relative",
};

const textDiv = {
	alignItems: "flex-start",
	alignSelf: "stretch",
	display: "flex",
	flex: "0 0 auto",
	flexDirection: "column",
	gap: "13px",
	position: "relative",
	width: "100%",
};

const ChooseUsCards = () => {
	return (
		<Box sx={container}>
			{chooseUsCards.map((card) => {
				return (
					<Box sx={cardStyle} component={"div"} key={card.id}>
						{icons[card.icon]}
						<Box component={"div"} sx={textDiv}>
							<Typography variant="span" sx={header}>
								{card.header}
							</Typography>
							<Typography variant="p">{card.body}</Typography>
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};

export default ChooseUsCards;
