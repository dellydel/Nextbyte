import React from "react";
import { Box, Typography } from "@mui/material";
import { header, headerText, headerHighlight, body } from "../styles/text";

const CustomSubheader = ({ textArray, alignment }) => {
	return (
		<>
			<Box
				variant={"div"}
				sx={{
					...header,
					textAlign: alignment,
				}}
			>
				<Typography variant="span" sx={headerText}>
					{textArray[0]}
				</Typography>
				<Typography variant="span" sx={headerHighlight}>
					{textArray[1]}
				</Typography>
				<Typography variant="span" sx={headerText}>
					{textArray[2]}
				</Typography>
			</Box>
			<Typography variant={"div"} sx={{ ...body, textAlign: alignment }}>
				{textArray[3]}
			</Typography>
		</>
	);
};

export default CustomSubheader;
