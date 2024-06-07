import Input from "./Input";

export default function GeneralInfo() {
	return (
		<div className="generalInfo">
			<div className="contactInfo">
				<Input label="Name" />
				<Input
					label="Email"
					type="email"
					placeholder="example@mail.com"
				/>
				<Input label="Phone" type="tel" />
			</div>
			<Input label="Summary" placeholder="Tell me about yourself..." />
		</div>
	);
}
