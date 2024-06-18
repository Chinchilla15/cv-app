import { motion } from "framer-motion";

export default function Modal({
	isOpen,
	onClose,
	onConfirm,
	title,
	message,
	children,
	showCloseButton,
}) {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<motion.div
				className="modal-content"
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
			>
				<h2>{title}</h2>
				<p>{message}</p>
				{children}
				<div className="modal-buttons">
					{showCloseButton ? (
						<button onClick={onClose} className="closeButton">
							Close
						</button>
					) : (
						<>
							<button onClick={onConfirm}>Yes</button>
							<button onClick={onClose}>No</button>
						</>
					)}
				</div>
			</motion.div>
		</div>
	);
}
