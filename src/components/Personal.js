import React, { useState } from "react";
import { Box } from "@mui/material";
import { getStudentByEmail } from "../api/studentsAPI";
import { useStudentByIdData } from "../hooks/useStudentsData";
import UserInfo from "./UserInfo";
import UserInfoEdit from "./UserInfoEdit";

const Personal = async ({ user }) => {
	const [editMode, setEditMode] = useState(false);
	const studentId = await getStudentByEmail(user);
	const {
		data: student,
		isPending,
		isError,
		isSuccess,
		error,
		refetch,
	} = useStudentByIdData(studentId);

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
