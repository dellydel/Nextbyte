import { scroller } from "react-scroll";

export const scrollToFooter = () => {
	scroller.scrollTo("footer", {
		duration: 800,
		delay: 0,
		smooth: "easeInOutQuart",
	});
};
