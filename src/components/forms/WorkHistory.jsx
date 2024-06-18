import FormButtons from "../FormButton";
import Input from "./Input";
import { useState } from "react";

export default function WorkHistory({ onSave, onDelete, onEdit, entries }) {
	const [work, setWork] = useState({
		companyName: "",
		role: "",
		startDate: null,
		endDate: null,
		ongoing: false,
		description: "",
	});

	const [editIndex, setEditIndex] = useState(null);

	const handleChange = (field, value) => {
		setWork((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSave = () => {
		if (editIndex !== null) {
			onEdit(editIndex, work);
		} else {
			onSave(work);
		}
		setWork({
			companyName: "",
			role: "",
			startDate: null,
			endDate: null,
			ongoing: false,
			description: "",
		});
		setEditIndex(null);
	};

	const handleClear = () => {
		setWork({
			companyName: "",
			role: "",
			startDate: null,
			endDate: null,
			ongoing: false,
			description: "",
		});
	};

	const handleEditClick = (index) => {
		setEditIndex(index);
		setWork(entries[index]);
	};

	const handleDeleteClick = (index) => {
		onDelete(index);
	};

	return (
		<div className="profInfo">
			<Input
				label="Company name"
				type={"text"}
				value={work.companyName}
				onChange={(value) => handleChange("companyName", value)}
			/>
			<Input
				label="Role"
				type={"text"}
				value={work.role}
				onChange={(value) => handleChange("role", value)}
			/>
			<Input
				label="Start Date"
				type={"date"}
				value={work.startDate}
				onChange={(value) => handleChange("startDate", value)}
			/>
			<br />
			<Input
				label="End Date"
				type={"date"}
				value={work.endDate}
				onChange={(value) => handleChange("endDate", value)}
				disabled={work.ongoing}
			/>
			<br />
			<label>
				Do you still work here?
				<div className="checkBoxInput">
					<input
						type="checkbox"
						checked={work.ongoing}
						onChange={(e) =>
							handleChange("ongoing", e.target.checked)
						}
					/>
					Yes
				</div>
			</label>
			<Input
				label="Role Description"
				type={"text"}
				value={work.description}
				onChange={(value) => handleChange("description", value)}
			/>
			<FormButtons onSave={handleSave} onClear={handleClear} />
			<div className="workEntries">
				{entries.map((entry, index) => (
					<div key={index} className="workEntryBox">
						<p>{entry.role}</p>
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
