import { motion } from "framer-motion";

export default function Header() {
	return (
		<header>
			<motion.p
				className="title"
				initial={{ transform: "translateX(100%)", opacity: 0 }}
				animate={{
					transform: "translateX(0)",
					opacity: 1,
					transition: { duration: 0.8 },
				}}
			>
				Easy CV
			</motion.p>
		</header>
		/* Add another component that animates the line that would go underneath the title*/
	);
}
