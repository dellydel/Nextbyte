import React, { useState } from "react";
import { Box } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useStudentByEmailData } from "../queries/useStudentsData";
import UserInfo from "./UserInfo";
import UserInfoEdit from "./UserInfoEdit";

const Personal = () => {
	const { user } = useAuth();
	const [editMode, setEditMode] = useState(false);

	const {
		data: student,
		isPending,
		isError,
		isSuccess,
		error,
		refetch,
	} = useStudentByEmailData(user);

	return (
		<Box>
			{isPending && <Box sx={{ p: 3 }}>Loading...</Box>}
			{isError && <span>{error.message}</span>}
			{isSuccess && student && (
				<>
					{!editMode && (
						<UserInfo student={student} setEditMode={setEditMode} />
					)}
					{editMode && (
						<UserInfoEdit
							refetch={refetch}
							setEditMode={setEditMode}
							student={{
								...student,
								dateOfBirth: student.dateOfBirth.substring(0, 10),
							}}
						/>
					)}
				</>
			)}
		</Box>
	);
};

export default Personal;
