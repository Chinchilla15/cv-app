import "../styles/App.css";
import GeneralInfo from "./forms/GeneralInfo";
import EducationInfo from "./forms/Education";
import WorkHistory from "./forms/WorkHistory";
import Skills from "./forms/Skills";

export default function CVInput({ activeComponent }) {
	const renderComponent = () => {
		switch (activeComponent) {
			case "GeneralInfo":
				return <GeneralInfo />;
			case "EducationInfo":
				return <EducationInfo />;
			case "WorkHistory":
				return <WorkHistory />;
			case "Skills":
				return <Skills />;
			default:
				return <GeneralInfo />;
		}
	};
	return <section className="cvInput">{renderComponent()}</section>;
}
