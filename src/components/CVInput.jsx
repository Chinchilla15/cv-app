import "../styles/App.css";
import GeneralInfo from "./forms/GeneralInfo";
import EducationInfo from "./forms/Education";
import WorkHistory from "./forms/WorkHistory";
import Skills from "./forms/Skills";
import { motion } from "framer-motion";

export default function CVInput({
	activeComponent,
	generalInfo,
	onGeneralInfoChange,
	onSaveEducation,
	onDeleteEducation,
	onEditEducation,
	educationEntries,
	onSaveWork,
	onDeleteWork,
	onEditWork,
	workEntries,
}) {
	const renderComponent = () => {
		switch (activeComponent) {
			case "GeneralInfo":
				return (
					<GeneralInfo
						generalInfo={generalInfo}
						onGeneralInfoChange={onGeneralInfoChange}
					/>
				);
			case "EducationInfo":
				return (
					<EducationInfo
						onSave={onSaveEducation}
						onDelete={onDeleteEducation}
						onEdit={onEditEducation}
						entries={educationEntries}
					/>
				);
			case "WorkHistory":
				return (
					<WorkHistory
						onSave={onSaveWork}
						onDelete={onDeleteWork}
						onEdit={onEditWork}
						entries={workEntries}
					/>
				);
			case "Skills":
				return <Skills />;
			default:
				return (
					<GeneralInfo
						generalInfo={generalInfo}
						onGeneralInfoChange={onGeneralInfoChange}
					/>
				);
		}
	};
	return (
		<motion.section
			initial={{ transform: "translateY(-100%)" }}
			animate={{
				transform: "translateY(0)",
				transition: { duration: 0.8 },
			}}
			className="cvInput"
		>
			{renderComponent()}
		</motion.section>
	);
}
