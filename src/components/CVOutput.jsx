import { motion } from "framer-motion";
import "../styles/App.css";
import { Fragment, useState } from "react";
import { Button } from "./ButtonsNav";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const formatDate = (date) => {
	const options = { year: "numeric", month: "short" };
	return date ? new Date(date).toLocaleDateString(undefined, options) : "";
};
const downloadPDF = () => {
	const input = document.getElementById("CV");
	html2canvas(input, {
		scale: 2,
		useCORS: true,
	}).then((canvas) => {
		const imgData = canvas.toDataURL("image/png");
		const pdf = new jsPDF("p", "mm", "a4");
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

		pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
		pdf.save("CV.pdf");
	});
};

function AboutOutput({ generalInfo, selectedColor }) {
	return (
		<div className="cvHeader" style={{ backgroundColor: selectedColor }}>
			<h1>
				{generalInfo.firstName} {generalInfo.lastName}
			</h1>
			<h3>{generalInfo.occupation}</h3>
			<p className="summaryOutput">{generalInfo.summary}</p>
		</div>
	);
}

function ContactOutput({ generalInfo }) {
	return (
		<div className="contactContainer">
			<div className="contactOutputTitle">
				<i className="fa-solid fa-user"></i>
				Contact
			</div>
			<ul>
				<li className="listPhone">
					<i className="fa-solid fa-phone"></i>
					<b>Phone</b>
					<br />
					{generalInfo.phone}
				</li>
				<li className="listEmail">
					<i className="fa-solid fa-envelope"></i>
					<b>Email</b>
					<br />
					{generalInfo.email}
				</li>
				<li className="listLocation">
					<i className="fa-solid fa-location-dot"></i>
					<b>Location</b>
					<br />
					{generalInfo.location}
				</li>
				<li className="listLinkedin">
					<i className="fa-brands fa-linkedin"></i>
					<b>Linkedin</b>
					<br />
					<a href={generalInfo.linkedin} target="_blank">
						{generalInfo.linkedin}
					</a>
				</li>
				<li className="listLanguages">
					<i className="fa-solid fa-globe"></i>
					<b>Languages</b>
					<br />
					{generalInfo.languages}
				</li>
			</ul>
		</div>
	);
}

function EducationOutput({ education }) {
	return (
		<Fragment>
			{education.map((education, index) => (
				<div key={index} className="educationOutputBox">
					<div className="educationOutputInfo">
						<h3>{education.degree}</h3>
						<h4>{education.schoolName}</h4>
					</div>
					<div className="dateContainer">
						<p className="initialDate">
							{formatDate(education.startDate)}
						</p>
						&mdash;
						<p className="finalDate">
							{education.ongoing
								? "Present"
								: formatDate(education.endDate)}
						</p>
					</div>
				</div>
			))}
		</Fragment>
	);
}

function WorkOutput({ work }) {
	return (
		<Fragment>
			{work.map((work, index) => (
				<div key={index} className="workOutputBox">
					<div className="workOutputInfo">
						<h3>{work.role}</h3>
						<h4>{work.companyName}</h4>
						<p>{work.description}</p>
					</div>
					<div className="dateContainer">
						<p className="initialDate">
							{formatDate(work.startDate)}
						</p>
						&mdash;
						<p className="finalDate">
							{work.ongoing
								? "Present"
								: formatDate(work.endDate)}
						</p>
					</div>
				</div>
			))}
		</Fragment>
	);
}

function SkillsOutput({ skills }) {
	return (
		<div className="skillsContainer">
			<div className="skillsOutputTitle">
				<i className="fa-solid fa-lightbulb"></i>
				Skills
			</div>
			{skills.map((skills, index) => (
				<div key={index} className="skillsOutputBox">
					<p>
						<b>{skills.category}: </b>
					</p>
					<p className="skillsDetails">{skills.details}</p>
				</div>
			))}
		</div>
	);
}

export default function CVOutput({
	generalInfo,
	educationEntries,
	workEntries,
	skillsEntries,
}) {
	const [colorPickerOpen, setColorPickerOpen] = useState(false);
	const [selectedColor, setSelectedColor] = useState("#003049"); // Default color

	const handleColorPickerToggle = () => {
		setColorPickerOpen(!colorPickerOpen);
	};

	const handleColorChange = (color) => {
		setSelectedColor(color);
		setColorPickerOpen(false);
	};
	return (
		<Fragment>
			<div className="outputContainer">
				<motion.section
					id="CV"
					className="cvOutput"
					initial={{ transform: "translateY(100%)" }}
					animate={{
						transform: "translateY(0)",
						transition: { duration: 0.8 },
					}}
				>
					<AboutOutput
						generalInfo={generalInfo}
						selectedColor={selectedColor}
					/>
					<ContactOutput generalInfo={generalInfo} />
					<div className="workContainer">
						<div className="workOutputTitle">
							<i className="fa-solid fa-briefcase"></i>
							Work Hsitory
						</div>
						<WorkOutput work={workEntries} />
					</div>
					<div className="educationContainer">
						<div className="educationOutputTitle">
							<i className="fa-solid fa-graduation-cap"></i>
							Education
						</div>
						<EducationOutput education={educationEntries} />
					</div>
					<SkillsOutput skills={skillsEntries} />
				</motion.section>
				<div className="outputButtons">
					<Button
						iconName={" fa-download fa-xl"}
						title={"Download"}
						onClick={downloadPDF}
					/>
					<Button
						text={"Color"}
						title={"Color"}
						iconName={" fa-palette"}
						onClick={handleColorPickerToggle}
					/>
					{colorPickerOpen && (
						<div className="color-picker">
							<button
								className="redColor"
								title="Red Color"
								onClick={() => handleColorChange("#8B0000")}
							></button>
							<button
								className="greenColor"
								title="Green Color"
								onClick={() => handleColorChange("#254336")}
							></button>
							<button
								className="maroonColor"
								title="Maroon Color"
								onClick={() => handleColorChange("#7B2D26")}
							></button>
							<button
								className="blackColor"
								title="Black Color"
								onClick={() => handleColorChange("#1b1b1b")}
							></button>
							<button
								className="blueColor"
								title="Blue Color"
								onClick={() => handleColorChange("#003049")}
							></button>
						</div>
					)}
				</div>
			</div>
		</Fragment>
	);
}
