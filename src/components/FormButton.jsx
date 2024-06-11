import { motion } from "framer-motion";

export default function FormButtons({ isActive }) {
	return (
		<div className="buttonsBox">
			<motion.button
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.25 },
				}}
				className={isActive ? "active" : ""}
				title="Add"
			>
				Clear
			</motion.button>
			<motion.button
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.25 },
				}}
				title="Remove"
				className="saveButton"
			>
				Save
			</motion.button>
		</div>
	);
}
