import Input from "./Input";
import FormButtons from "../FormButton";

export default function EducationInfo() {
	return (
		<div className="educationInfo">
			<Input label="School Name" type={"text"} />
			<Input label={"Degree/Program"} />
			<Input label={"Start Date"} type={"date"} />
			<Input label={"End Date"} type={"date"} />
			<FormButtons />
		</div>
	);
}
