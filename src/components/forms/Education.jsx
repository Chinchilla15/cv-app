import Input from "./Input";
import FormButtons from "../FormButton";
import { useState } from "react";

export default function EducationInfo({ onSave, onDelete, onEdit, entries }) {
	const [education, setEducation] = useState({
		schoolName: "",
		degree: "",
		startDate: null,
		endDate: null,
		ongoing: false,
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
			startDate: null,
			endDate: null,
			ongoing: false,
		});
		setEditIndex(null);
	};

	const handleClear = () => {
		setEducation({
			schoolName: "",
			degree: "",
			startDate: null,
			endDate: null,
			ongoing: false,
		});
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
			<br />
			<Input
				label={"End Date"}
				type={"date"}
				value={education.endDate}
				onChange={(value) => handleChange("endDate", value)}
				disabled={education.ongoing}
			/>
			<br />
			<label>
				Do you still study here?
				<div className="checkBoxInput">
					<input
						type="checkbox"
						checked={education.ongoing}
						onChange={(e) =>
							handleChange("ongoing", e.target.checked)
						}
					/>
					Yes
				</div>
			</label>
			<FormButtons onSave={handleSave} onClear={handleClear} />
			<div className="educationEntries">
				{entries.map((entry, index) => (
					<div key={index} className="educationEntryBox">
						<p>{entry.degree}</p>
						<div className="editDeleteBox">
							<button
								title="Edit"
								onClick={() => handleEditClick(index)}
							>
								Edit
							</button>
							<button
								title="Delete"
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
