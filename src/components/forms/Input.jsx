export default function Input({ label, type, placeholder, value, onChange }) {
	if (label === "Summary") {
		return (
			<label className="summaryInput">
				{label}
				<textarea
					placeholder={placeholder}
					value={value}
					onChange={(e) => onChange(e.target.value)}
				></textarea>
			</label>
		);
	}
	return (
		<label>
			{label}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			></input>
		</label>
	);
}
