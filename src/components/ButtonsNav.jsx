import { motion } from "framer-motion";

function Button({ text, iconName, onClick }) {
	return (
		<motion.button
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.8 } }}
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.25 },
			}}
			whileTap={{ scale: 1 }}
			onClick={onClick}
		>
			<i className={`fa-solid ${iconName}`}></i>
			{text}
		</motion.button>
	);
}

export default function ButtonsNav({ setActiveComponent }) {
	return (
		<div className="buttonsNav">
			<Button
				text={"General Info"}
				iconName={"fa-user"}
				onClick={() => setActiveComponent("GeneralInfo")}
			/>
			<Button
				text={"Education"}
				iconName={"fa-graduation-cap"}
				onClick={() => setActiveComponent("EducationInfo")}
			/>
			<Button
				text={"Work History"}
				iconName={"fa-briefcase"}
				onClick={() => setActiveComponent("WorkHistory")}
			/>
			<Button
				text={"Skills"}
				iconName={"fa-lightbulb"}
				onClick={() => setActiveComponent("Skills")}
			/>
		</div>
	);
}
