import { motion } from "framer-motion";
import "../styles/App.css";
import { Fragment } from "react";

function AboutOutput({ generalInfo }) {
	return (
		<div className="cvHeader">
			<h1>
				{generalInfo.firstName} {generalInfo.lastName}
			</h1>
			<h3>{generalInfo.occupation}</h3>
			<p>{generalInfo.summary}</p>
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
						{generalInfo.firstName} {generalInfo.lastName}
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
						<p className="initialDate">{education.startDate}</p>
						&mdash;
						<p className="finalDate">{education.endDate}</p>
					</div>
				</div>
			))}
		</Fragment>
	);
}

function WorkOutput() {
	return (
		<Fragment>
			<div className="workOutputInfo">
				<h3>Role</h3>
				<h4>Company</h4>
				<p>Description</p>
			</div>
			<div className="dateContainer">
				<p className="initialDate">Initial Date</p>
				&mdash;
				<p className="finalDate">Final Date</p>
			</div>
		</Fragment>
	);
}

function SkillsOutput() {
	return (
		<div className="skillsContainer">
			<div className="skillsOutputTitle">
				<i className="fa-solid fa-lightbulb"></i>
				Skills
			</div>
			<p>Category</p>
			<ul>
				<li>Skills</li>
			</ul>
		</div>
	);
}

export default function CVOutput({ generalInfo, educationEntries }) {
	return (
		<motion.section
			className="cvOutput"
			initial={{ transform: "translateY(100%)" }}
			animate={{
				transform: "translateY(0)",
				transition: { duration: 0.8 },
			}}
		>
			<AboutOutput generalInfo={generalInfo} />
			<ContactOutput generalInfo={generalInfo} />
			<div className="educationContainer">
				<div className="educationOutputTitle">
					<i className="fa-solid fa-graduation-cap"></i>
					Education
				</div>
				<EducationOutput education={educationEntries} />
			</div>
			<div className="workContainer">
				<div className="workOutputTitle">
					<i className="fa-solid fa-briefcase"></i>
					Work Hsitory
				</div>
				<WorkOutput />
			</div>
			<SkillsOutput />
		</motion.section>
	);
}
