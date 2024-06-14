import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ selectedDate, onDateChange, disabled }) => {
	return (
		<DatePicker
			selected={selectedDate}
			onChange={onDateChange}
			disabled={disabled}
			dateFormat="MM/yyyy"
			showMonthYearPicker
			showFullMonthYearPicker
			showTwoColumnMonthYearPicker
			isClearable
		/>
	);
};

export default function Input({
	label,
	type,
	placeholder,
	value,
	onChange,
	disabled,
}) {
	const handleInputChange = (event) => {
		if (onChange) {
			onChange(event.target.value);
		}
	};
	if (label === "Summary") {
		return (
			<label className="summaryInput">
				{label}
				<textarea
					placeholder={placeholder}
					value={value}
					onChange={handleInputChange}
				></textarea>
			</label>
		);
	}

	if (type === "date") {
		return (
			<label>
				{label} <br />
				<DateInput
					selectedDate={value}
					onDateChange={onChange}
					disabled={disabled}
				/>
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
				onChange={handleInputChange}
			></input>
		</label>
	);
}
