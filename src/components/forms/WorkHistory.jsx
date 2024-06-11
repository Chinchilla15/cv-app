import FormButtons from "../FormButton";
import Input from "./Input";
/*
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Example = () => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<DatePicker
			selected={startDate}
			onChange={(date) => setStartDate(date)}
		/>
	);
};
*/
export default function WorkHistory() {
	return (
		<div className="profInfo">
			<Input label="Company name" />
			<Input label="Role" />
			<Input label="Start date" type={"date"} />
			<Input label="End date" type={"date"} />
			<Input label="Role Description" />
			<FormButtons />
		</div>
	);
}
