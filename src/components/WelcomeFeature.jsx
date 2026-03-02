import { Box, Grid } from "@mui/material";
import Welcome from "./Welcome";

const WelcomeFeature = () => {
	return (
		<Grid container align="center">
			<Grid item xs={12} md={6}>
				<Box
					sx={{
						width: { xs: 1, md: "auto" },
						pl: { xs: 0, md: 2 },
						maxWidth: "100%",
						height: "auto",
						objectFit: "contain",
						display: "block",
					}}
					component={"img"}
					src={"/images/sitting_with_laptop.webp"}
					alt={"woman sitting with laptop"}
				/>
			</Grid>
			<Grid
				item
				sx={{ pt: { xs: 5, md: 0 }, px: { xs: 0, md: 5 } }}
				xs={12}
				md={6}
			>
				<Welcome />
			</Grid>
		</Grid>
	);
};

export default WelcomeFeature;
