import "./styles/App.css";
import "./styles/ButtonsNav.css";
import "./styles/Forms.css";
import "./styles/Output.css";
import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import ButtonsNav from "./components/ButtonsNav";
import { Fragment, useState } from "react";

function App() {
	const [activeComponent, setActiveComponent] = useState("GeneralInfo");
	const [generalInfo, setGeneralInfo] = useState({
		firstName: "Alessandro",
		lastName: "Chinchilla",
		email: "alessandroch.dev@gmail.com",
		phone: "+503 7777 3333",
		location: "San Salvador, El Salvador",
		occupation: "Student / Web Dev",
		languages: "Spanish, English, French",
		linkedin: "https://linkedin.com/in/alessandro-chinchilla-",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse cupiditate perferendis illo sit est voluptas earum voluptatum? Alias aliquid placeat quasi veniam atque, magnam ipsum ipsam cupiditate omnis amet.",
	});

	const [educationEntries, setEducationEntries] = useState([]);

	const handleGeneralInfoChange = (field, value) => {
		setGeneralInfo((prevInfo) => ({
			...prevInfo,
			[field]: value,
		}));
	};

	const handleSaveEducation = (newEducation) => {
		setEducationEntries((prevEntries) => [...prevEntries, newEducation]);
	};

	const handleDeleteEducation = (index) => {
		const updatedEntries = educationEntries.filter((_, i) => i !== index);
		setEducationEntries(updatedEntries);
	};

	const handleEditEducation = (index, updatedEducation) => {
		const updatedEntries = educationEntries.map((entry, i) =>
			i === index ? updatedEducation : entry
		);
		setEducationEntries(updatedEntries);
	};
	return (
		<Fragment>
			<Header />
			<main>
				<div className="inputContainer">
					<ButtonsNav setActiveComponent={setActiveComponent} />
					<CVInput
						activeComponent={activeComponent}
						generalInfo={generalInfo}
						onGeneralInfoChange={handleGeneralInfoChange}
						onSaveEducation={handleSaveEducation}
						onDeleteEducation={handleDeleteEducation}
						onEditEducation={handleEditEducation}
						educationEntries={educationEntries}
					/>
				</div>
				<CVOutput
					generalInfo={generalInfo}
					educationEntries={educationEntries}
				/>
			</main>
		</Fragment>
	);
}
export default App;
