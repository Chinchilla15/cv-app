import { motion } from "framer-motion";

export default function FormButtons({ onSave }) {
	return (
		<div className="buttonsBox">
			<motion.button
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.25 },
				}}
				title="Clear"
				className="clearButton"
				onClick={() => {
					document
						.querySelectorAll(
							".educationInfo input, .educationInfo date "
						)
						.forEach((input) => (input.value = ""));
				}}
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
