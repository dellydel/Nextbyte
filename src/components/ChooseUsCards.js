import React from "react";
import AutoStoriesOutlined from "@mui/icons-material/AutoStoriesOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VerifiedUserOutlined from "@mui/icons-material/VerifiedUserOutlined";
import { Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { chooseUsCards } from "../data/homeContent";

const icons = {
	GroupsOutlinedIcon: <GroupsOutlinedIcon color="secondary" />,
	VerifiedUserOutlined: <VerifiedUserOutlined color="secondary" />,
	AutoStoriesOutlined: <AutoStoriesOutlined color="secondary" />,
};

const cardStyle = {
	alignItems: "flex-start",
	backgroundColor: "#ffffff",
	borderRadius: 1,
	boxShadow: "0px 2px 4px -2px #0000000f, 0px 4px 8px -2px #0000001a",
	display: "flex",
	flexDirection: "column",
	gap: 3,
	justifyContent: "center",
	overflow: "hidden",
	padding: { xs: 5, md: 3 },
	position: "relative",
	mx: { xs: 4, md: 0 },
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
	width: 1,
};

const ChooseUsCards = () => {
	return (
		<Grid container spacing={{ xs: 4, md: 2 }} justifyContent="center">
			{chooseUsCards.map((card) => {
				return (
					<Grid item xs={12} md={4} key={card.id}>
						<Box sx={cardStyle} component={"div"}>
							{icons[card.icon]}
							<Box component={"div"} sx={textDiv}>
								<Typography variant="span" sx={header}>
									{card.header}
								</Typography>
								<Typography sx={body} variant="p">
									{card.body}
								</Typography>
							</Box>
						</Box>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default ChooseUsCards;
