import React, { useState, useEffect } from "react";
import { List, Box } from "@mui/material";
import { useCourseMaterialsData } from "../hooks/useCourseMaterialsData";
import CourseMaterial from "./CourseMaterial";

const pageLayout = {
	display: "flex",
	justifyContent: "space-between",
	height: 510,
	overflowY: "auto",
	mt: 2,
};

const CourseMaterals = () => {
	const {
		data: courseMaterials,
		isPending: isCourseMaterialsPending,
		isError: isCourseMaterialsError,
		isSuccess: isCourseMaterialsSuccess,
		error: courseMaterialsError,
	} = useCourseMaterialsData();

	const [videos, setVideos] = useState([]);
	const [documents, setDocuments] = useState([]);

	useEffect(() => {
		if (courseMaterials) {
			const videos = courseMaterials.filter((file) =>
				file.name.endsWith(".mp4"),
			);
			setVideos(videos);
			const documents = courseMaterials.filter(
				(file) => !file.name.endsWith(".mp4"),
			);
			setDocuments(documents);
		}
	}, [courseMaterials]);

	return (
		<>
			{isCourseMaterialsPending && <span>Loading course details...</span>}
			{isCourseMaterialsError && <span>{courseMaterialsError.message}</span>}
			{isCourseMaterialsSuccess && courseMaterials && (
				<Box sx={pageLayout}>
					<Box sx={{ width: "50%" }}>
						<Box
							sx={{
								mt: 5,
								pr: 1,
								color: "grey",
							}}
						>
							<span>
								<b>Course Materials</b>
							</span>
							{documents && documents.length > 0 && (
								<List>
									{documents.map((document, index) => (
										<CourseMaterial key={index} file={document} />
									))}
								</List>
							)}
						</Box>
					</Box>
					<Box sx={{ width: "50%" }}>
						<Box
							sx={{
								mt: 5,
								pl: 1,
								color: "grey",
							}}
						>
							<span>
								<b>Course Recordings</b>
							</span>
							{videos && videos.length > 0 && (
								<List>
									{videos.map((video, index) => (
										<CourseMaterial key={index} file={video} />
									))}
								</List>
							)}
						</Box>
					</Box>
				</Box>
			)}
		</>
	);
};

export default CourseMaterals;
