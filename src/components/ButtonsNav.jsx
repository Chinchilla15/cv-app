import { motion } from "framer-motion";
import { useState } from "react";

function Button({ text, title, iconName, isActive, onClick }) {
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
			className={isActive ? "active" : ""}
			title={title}
		>
			<i className={`fa-solid ${iconName}`}></i>
			{text}
		</motion.button>
	);
}

export default function ButtonsNav({ setActiveComponent }) {
	const [activeButton, setActiveButton] = useState("GeneralInfo");

	const handleButtonClick = (componentName) => {
		setActiveButton(componentName);
		setActiveComponent(componentName);
	};
	return (
		<div className="buttonsNav">
			<Button
				text={"General Info"}
				title={"General Info"}
				iconName={"fa-user"}
				isActive={activeButton === "GeneralInfo"}
				onClick={() => handleButtonClick("GeneralInfo")}
			/>
			<Button
				text={"Education"}
				title={"Education"}
				iconName={"fa-graduation-cap"}
				isActive={activeButton === "EducationInfo"}
				onClick={() => handleButtonClick("EducationInfo")}
			/>
			<Button
				text={"Work History"}
				title={"Work History"}
				iconName={"fa-briefcase"}
				isActive={activeButton === "WorkHistory"}
				onClick={() => handleButtonClick("WorkHistory")}
			/>
			<Button
				text={"Skills"}
				title={"Skills"}
				iconName={"fa-lightbulb"}
				isActive={activeButton === "Skills"}
				onClick={() => handleButtonClick("Skills")}
			/>
		</div>
	);
}

export { Button };
