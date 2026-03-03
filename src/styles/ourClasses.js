export const wrapper = {
	display: "flex",
	flexDirection: { xs: "column", lg: "row" },
	px: { xs: 4, md: 5, lg: 15 },
	pt: { xs: 5, lg: 25 },
	mb: 5,
	width: 1,
	maxWidth: { xs: 1, lg: 1440 },
	boxSizing: "border-box",
};

export const instructors = {
	alignItems: "center",
	alignSelf: "stretch",
	display: "flex",
	flex: "0 0 auto",
	gap: 0.5,
	position: "relative",
	justifyContent: { xs: "center", lg: "flex-start" },
	color: "white",
	textAlign: { xs: "center", lg: "left" },
	mt: { xs: 2, lg: 0 },
};

export const instructorsBody = {
	alignSelf: "stretch",
	color: "#ffffff9c",
	fontSize: "16px",
	fontWeight: 400,
	letterSpacing: "-0.32px",
	lineHeight: "22.4px",
	position: "relative",
};

export const instructorsHeader = {
	color: "#ffffff",
	fontSize: 20,
	fontWeight: 600,
	letterSpacing: "-0.8px",
	lineHeight: "normal",
	marginTop: "-1px",
	position: "relative",
	display: "flex",
	alignItems: "center",
	gap: 0.5,
};

export const viewAll = {
	width: 1,
	maxWidth: { xs: 1, lg: 1440 },
	height: 85,
	textTransform: "none",
	borderWidth: 3,
	borderRadius: 2,
	mx: { xs: 4, md: 5, lg: 15 },
	mt: 3,
};

export const viewAllText = {
	color: "#ffffff",
	fontSize: "18px",
	fontWeight: 500,
	letterSpacing: 0,
	lineHeight: "normal",
	position: "relative",
	whiteSpace: "nowrap",
	width: "fit-content",
};
