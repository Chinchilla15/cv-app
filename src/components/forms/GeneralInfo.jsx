import Input from "./Input";

export default function GeneralInfo() {
	return (
		<div className="generalInfo">
			<div className="contactInfo">
				<Input label="First Name" />
				<Input label="Last Name" />
				<Input
					label="Email"
					type="email"
					placeholder="example@mail.com"
				/>
				<Input label="Phone" type="tel" />
				<Input
					label="Location"
					type="text"
					placeholder={"Country, City"}
				/>
				<Input
					label="Occupation"
					type="text"
					placeholder={"E.g. Developer, Student..."}
				/>
				<Input
					label="Languages"
					type="text"
					placeholder={"English, French, German..."}
				/>
				<Input
					label="LinkedIn"
					type="text"
					placeholder={"Profile Link"}
				/>
			</div>
			<Input label="Summary" placeholder="Tell me about yourself..." />
		</div>
	);
}
