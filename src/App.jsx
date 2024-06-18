import "./styles/App.css";
import "./styles/ButtonsNav.css";
import "./styles/Forms.css";
import "./styles/Output.css";
import "./styles/Modal.css";
import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import ButtonsNav from "./components/ButtonsNav";
import { Button } from "./components/ButtonsNav";
import Modal from "./components/Modal";
import { Fragment, useState, useEffect } from "react";

function App() {
	const [activeComponent, setActiveComponent] = useState("GeneralInfo");
	const [generalInfo, setGeneralInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		location: "",
		occupation: "",
		languages: "",
		linkedin: "",
		summary: "",
	});

	const [educationEntries, setEducationEntries] = useState([]);

	const [workEntries, setWorkEntries] = useState([]);

	const [skillsEntries, setSkillsEntries] = useState([]);

	const [isCleanModalOpen, setIsCleanModalOpen] = useState(false);
	const [isLoadModalOpen, setIsLoadModalOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);

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

	const handleSaveWork = (newWork) => {
		setWorkEntries((prevEntries) => [...prevEntries, newWork]);
	};

	const handleDeleteWork = (index) => {
		const updateEntries = workEntries.filter((_, i) => i !== index);
		setWorkEntries(updateEntries);
	};

	const handleEditwork = (index, updateWork) => {
		const updateEntries = workEntries.map((entry, i) =>
			i === index ? updateWork : entry
		);
		setWorkEntries(updateEntries);
	};

	const handleSaveSkills = (newSkills) => {
		setSkillsEntries((prevEntries) => [...prevEntries, newSkills]);
	};

	const handleDeleteSkills = (index) => {
		const updateEntries = skillsEntries.filter((_, i) => i !== index);
		setSkillsEntries(updateEntries);
	};

	const handleEditSkills = (index, updateSkills) => {
		const updateEntries = skillsEntries.map((entry, i) =>
			i === index ? updateSkills : entry
		);
		setSkillsEntries(updateEntries);
	};

	const openCleanModal = () => {
		setIsCleanModalOpen(true);
	};

	const closeCleanModal = () => {
		setIsCleanModalOpen(false);
	};

	const openLoadModal = () => {
		setIsLoadModalOpen(true);
	};

	const closeLoadModal = () => {
		setIsLoadModalOpen(false);
	};

	const handleAboutClick = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const resetTemplate = () => {
		setGeneralInfo({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			location: "",
			occupation: "",
			languages: "",
			linkedin: "",
			summary: "",
		});
		setEducationEntries([]);
		setWorkEntries([]);
		setSkillsEntries([]);
		setIsCleanModalOpen(false);
	};

	const loadTemplate = () => {
		setGeneralInfo({
			firstName: "Alessandro",
			lastName: "Chinchilla",
			email: "alessandroch.dev@gmail.com",
			phone: "+503 7777 3333",
			location: "San Salvador, El Salvador",
			occupation: "Student / Web Dev",
			languages: "Spanish, English, Mandarin",
			linkedin: "linkedin.com/in/alessandro-chinchilla-",
			summary:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse cupiditate perferendis illo sit est voluptas earum voluptatum? Alias aliquid placeat quasi veniam atque, magnam ipsum ipsam cupiditate omnis amet.",
		});
		setEducationEntries([
			{
				schoolName: "Harvard University",
				degree: "Cool Degree",
				startDate: "2021-02",
				endDate: null,
				ongoing: true,
			},
		]);
		setWorkEntries([
			{
				companyName: "Apple Inc.",
				role: "Code Janitor",
				startDate: "2021-05",
				endDate: null,
				ongoing: true,
				description: "Clean code for all Apple Software and floors",
			},
		]);
		setSkillsEntries([
			{
				category: "Front-end Skills",
				details:
					"HTML, CSS, JavaScript, React, Jest, Tailwind, Bootstrap, Git, Webpack",
			},
		]);
		setIsLoadModalOpen(false);
	};

	useEffect(() => {
		loadTemplate();
	}, []);

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
						onSaveWork={handleSaveWork}
						onDeleteWork={handleDeleteWork}
						onEditWork={handleEditwork}
						workEntries={workEntries}
						onSaveSkills={handleSaveSkills}
						onDeleteSkills={handleDeleteSkills}
						onEditSkills={handleEditSkills}
						skillsEntries={skillsEntries}
					/>
					<div className="extraButtons">
						<Button
							text={"Clean"}
							title={"Clean Output"}
							iconName={"fa-broom"}
							onClick={openCleanModal}
						/>
						<Button
							text={"Load"}
							title={"Load Template"}
							iconName={"fa-file-import"}
							onClick={openLoadModal}
						/>
						<Button
							text={"About"}
							title={"About"}
							iconName={" fa-info fa-lg"}
							onClick={handleAboutClick}
						/>
					</div>
				</div>
				<CVOutput
					generalInfo={generalInfo}
					educationEntries={educationEntries}
					workEntries={workEntries}
					skillsEntries={skillsEntries}
				/>
			</main>
			<Modal
				isOpen={isCleanModalOpen}
				onClose={closeCleanModal}
				onConfirm={resetTemplate}
				title="Confirmation"
				message="Are you sure you want to clear all the fields? This action cannot be undone"
			/>
			<Modal
				isOpen={isLoadModalOpen}
				onClose={closeLoadModal}
				onConfirm={loadTemplate}
				title="Load Template"
				message="Are you sure you want to load the template? This will overwrite your current data."
			/>
			<Modal
				isOpen={showModal}
				onClose={handleCloseModal}
				showCloseButton={true}
				title="About This App"
				message="This app helps you generate a CV by filling the forms and download  it for free."
			>
				<p>Created by Alessandro Chinchilla.</p>
				<a
					href="https://github.com/chinchilla15"
					target="_blank"
					rel="noopener noreferrer"
				>
					Visit My GitHub <i className="fa-brands fa-github"></i>
				</a>
				<br />
				<a
					href="https://chinchilla15.github.io/portfolio/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Visit My Website{" "}
					<i className="fa-solid fa-image-portrait"></i>
				</a>
			</Modal>
		</Fragment>
	);
}
export default App;
