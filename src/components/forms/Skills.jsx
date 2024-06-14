import { useState } from "react";
import FormButtons from "../FormButton";
import Input from "./Input";

export default function Skills({ onSave, onDelete, onEdit, entries }) {
	const [skills, setSkills] = useState({
		category: "",
		details: "",
	});

	const [editIndex, setEditIndex] = useState(null);

	const handleChange = (field, value) => {
		setSkills((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSave = () => {
		if (editIndex !== null) {
			onEdit(editIndex, skills);
		} else {
			onSave(skills);
		}
		setSkills({
			category: "",
			details: "",
		});
		setEditIndex(null);
	};

	const handleEditClick = (index) => {
		setEditIndex(index);
		setSkills(entries[index]);
	};

	const handleDeleteClick = (index) => {
		onDelete(index);
	};

	return (
		<div className="skillsInfo">
			<Input
				label={"Category"}
				type={"text"}
				value={skills.category}
				placeholder={"E.g. Soft Skills "}
				onChange={(value) => handleChange("category", value)}
			/>
			<Input
				label={"Skills details"}
				type={"text"}
				value={skills.details}
				placeholder={"Disciplined, Organized, Responsible..."}
				onChange={(value) => handleChange("details", value)}
			/>
			<FormButtons onSave={handleSave} />
			<div className="skillsEntries">
				{entries.map((entry, index) => (
					<div key={index} className="skillsEntryBox">
						<p>{entry.category}</p>
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
