import { Suspense } from "react";
import CourseDetails from "../../components/CourseDetails";

const Page = () => {
	return (
		<Suspense>
			<CourseDetails />
		</Suspense>
	);
};

export default Page;
