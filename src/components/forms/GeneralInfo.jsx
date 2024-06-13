import Input from "./Input";

export default function GeneralInfo({ generalInfo, onGeneralInfoChange }) {
	return (
		<div className="generalInfo">
			<div className="contactInfo">
				<Input
					label="First Name"
					value={generalInfo.firstName}
					onChange={(value) =>
						onGeneralInfoChange("firstName", value)
					}
				/>
				<Input
					label="Last Name"
					value={generalInfo.lastName}
					onChange={(value) => onGeneralInfoChange("lastName", value)}
				/>
				<Input
					label="Email"
					type="email"
					placeholder="example@mail.com"
					value={generalInfo.email}
					onChange={(value) => onGeneralInfoChange("email", value)}
				/>
				<Input
					label="Phone"
					type="tel"
					value={generalInfo.phone}
					onChange={(value) => onGeneralInfoChange("phone", value)}
				/>
				<Input
					label="Location"
					type="text"
					placeholder={"Country, City"}
					value={generalInfo.location}
					onChange={(value) => onGeneralInfoChange("location", value)}
				/>
				<Input
					label="Occupation"
					type="text"
					placeholder={"E.g. Developer, Student..."}
					value={generalInfo.occupation}
					onChange={(value) =>
						onGeneralInfoChange("occupation", value)
					}
				/>
				<Input
					label="Languages"
					type="text"
					placeholder={"English, French, German..."}
					value={generalInfo.languages}
					onChange={(value) =>
						onGeneralInfoChange("languages", value)
					}
				/>
				<Input
					label="LinkedIn"
					type="text"
					placeholder={"Profile Link"}
					value={generalInfo.linkedin}
					onChange={(value) => onGeneralInfoChange("linkedin", value)}
				/>
			</div>
			<Input
				label="Summary"
				placeholder="Tell me about yourself..."
				value={generalInfo.summary}
				onChange={(value) => onGeneralInfoChange("summary", value)}
			/>
		</div>
	);
}
