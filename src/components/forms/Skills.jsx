import FormButtons from "../FormButton";
import Input from "./Input";

export default function Skills() {
	return (
		<div className="skillsInfo">
			<Input label="Category" placeholder={"E.g. Soft Skills "} />
			<Input
				label="Skills details"
				placeholder={"Disciplined, Organized, Responsible..."}
			/>
			<FormButtons />
		</div>
	);
}
