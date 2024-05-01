import React from "react";
import { Box, Typography } from "@mui/material";
import { header, headerText, body } from "../styles/text";

const wrapper = {
	display: "flex",
	flexWrap: "wrap",
	flexDirection: { xs: "column", md: "row" },
	alignItems: "center",
	px: { xs: 4, md: 25 },
	mt: { xs: 6, md: "120px" },
	mb: 5,
};

const HeaderAndText = ({ headerContent, bodyContent }) => {
	return (
		<Box sx={wrapper}>
			<Box
				variant={"div"}
				sx={{
					...header,
					pb: 2,
					width: { xs: 1, md: 0.5 },
					textAlign: { xs: "center", md: "left" },
				}}
			>
				<Typography variant="span" sx={headerText}>
					{headerContent}
				</Typography>
			</Box>
			<Typography
				variant="span"
				sx={{
					...body,
					width: { xs: 1, md: 0.5 },
					textAlign: { xs: "center", md: "left" },
				}}
			>
				{bodyContent}
			</Typography>
		</Box>
	);
};

export default HeaderAndText;
