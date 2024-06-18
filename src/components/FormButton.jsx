import { motion } from "framer-motion";

export default function FormButtons({ onSave, onClear }) {
	return (
		<div className="buttonsBox">
			<motion.button
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.25 },
				}}
				title="Clear"
				className="clearButton"
				onClick={onClear}
			>
				Clear
			</motion.button>
			<motion.button
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.25 },
				}}
				title="Save"
				className="saveButton"
				onClick={onSave}
			>
				Save
			</motion.button>
		</div>
	);
}
