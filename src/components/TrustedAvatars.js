import React from "react";
import { Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const avatarStyle = {
	height: 32,
	width: 32,
	weight: 1000,
	border: 2,
	color: "white",
};

const TrustedAvatars = () => {
	return (
		<Box
			sx={{
				display: "flex",
				gap: 0,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Stack direction="row" spacing={-2}>
				<Avatar
					sx={avatarStyle}
					alt="Remy Sharp"
					src="/images/home_avatars/Avi1.png"
				/>
				<Avatar
					sx={avatarStyle}
					alt="Travis Howard"
					src="/images/home_avatars/Avi2.png"
				/>
				<Avatar
					sx={avatarStyle}
					alt="Cindy Baker"
					src="/images/home_avatars/Avi3.png"
				/>
				<Avatar
					sx={avatarStyle}
					alt="Travis Howard"
					src="/images/home_avatars/Avi4.png"
				/>
				<Avatar sx={avatarStyle} alt="2k+">
					<Typography sx={{ fontSize: 10 }}>100+</Typography>
				</Avatar>
			</Stack>
			<Typography
				sx={{
					ml: 5,
					fontSize: 18,
					color: "white",
				}}
			>
				Trusted by students worldwide.
			</Typography>
		</Box>
	);
};

export default TrustedAvatars;
