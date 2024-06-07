export default function Input({ label, type, placeholder }) {
	if (label === "Summary") {
		return (
			<label className="summaryInput">
				{label}
				<textarea placeholder={placeholder}></textarea>
			</label>
		);
	}
	return (
		<label>
			{label}
			<input type={type} placeholder={placeholder}></input>
		</label>
	);
}
