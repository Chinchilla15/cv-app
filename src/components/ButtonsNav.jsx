import { motion } from "framer-motion";

function Button({ text, iconName }) {
	return (
		<motion.button
			initial={{ opacity: 0.3 }}
			animate={{ opacity: 1, transition: { duration: 0.8 } }}
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.25 },
			}}
			whileTap={{ scale: 1 }}
		>
			<i className={`fa-solid ${iconName}`}></i>
			{text}
		</motion.button>
	);
}

export default function ButtonsNav() {
	return (
		<div className="buttonsNav">
			<Button text={"General Info"} iconName={"fa-user"} />
			<Button text={"Education"} iconName={"fa-graduation-cap"} />
			<Button text={"Work History"} iconName={"fa-briefcase"} />
			<Button text={"Skills"} iconName={"fa-lightbulb"} />
		</div>
	);
}
