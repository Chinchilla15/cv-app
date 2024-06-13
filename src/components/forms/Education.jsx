import Input from "./Input";
import FormButtons from "../FormButton";
import { useState } from "react";

export default function EducationInfo({ onSave, onDelete, onEdit, entries }) {
	const [education, setEducation] = useState({
		schoolName: "",
		degree: "",
		startDate: "",
		endDate: "",
	});

	const [editIndex, setEditIndex] = useState(null);

	const handleChange = (field, value) => {
		setEducation((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSave = () => {
		if (editIndex !== null) {
			onEdit(editIndex, education);
		} else {
			onSave(education);
		}
		setEducation({
			schoolName: "",
			degree: "",
			startDate: "",
			endDate: "",
		});
		setEditIndex(null);
	};

	const handleEditClick = (index) => {
		setEditIndex(index);
		setEducation(entries[index]);
	};

	const handleDeleteClick = (index) => {
		onDelete(index);
	};

	return (
		<div className="educationInfo">
			<Input
				label="School Name"
				type={"text"}
				value={education.schoolName}
				onChange={(value) => handleChange("schoolName", value)}
			/>
			<Input
				label={"Degree/Program"}
				type={"text"}
				value={education.degree}
				onChange={(value) => handleChange("degree", value)}
				required={"required"}
			/>
			<Input
				label={"Start Date"}
				type={"date"}
				value={education.startDate}
				onChange={(value) => handleChange("startDate", value)}
			/>
			<Input
				label={"End Date"}
				type={"date"}
				value={education.endDate}
				onChange={(value) => handleChange("endDate", value)}
			/>
			<FormButtons onSave={handleSave} />
			<div className="educationEntries">
				{entries.map((entry, index) => (
					<div key={index} className="educationEntryBox">
						<p>{entry.degree}</p>
						<div className="editDeleteBox">
							<button onClick={() => handleEditClick(index)}>
								Edit
							</button>
							<button
								onClick={() => {
									handleDeleteClick(index);
								}}
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
