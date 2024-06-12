import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/App.css";
import { Fragment } from "react";

function AboutOutput() {
	return (
		<div className="cvHeader">
			<h1>Alessandro Chinchilla</h1>
			<h3>Web Dev / Student</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Cupiditate nemo id porro distinctio minima molestiae debitis
				aperiam quasi ad a, consectetur temporibus enim expedita dolorem
				natus voluptate, maxime veniam nesciunt!
			</p>
		</div>
	);
}

function ContactOutput() {
	return (
		<div className="contactContainer">
			<div className="contactOutputTitle">
				<i className="fa-solid fa-user"></i>
				Contact
			</div>
			<ul>
				<li className="listPhone">
					<i className="fa-solid fa-phone"></i>Phone
				</li>
				<li className="listEmail">
					<i className="fa-solid fa-envelope"></i>Email
				</li>
				<li className="listLocation">
					<i className="fa-solid fa-location-dot"></i>Location
				</li>
				<li className="listLinkedin">
					<i className="fa-brands fa-linkedin"></i>
					<a href="#">Linkedin</a>
				</li>
				<li className="listLanguages">
					<i className="fa-solid fa-globe"></i>Languages
				</li>
			</ul>
		</div>
	);
}

function EducationOutput() {
	return (
		<Fragment>
			<div className="educationOutputInfo">
				<h3>Degree</h3>
				<h4>School Name</h4>
			</div>
			<div className="dateContainer">
				<p className="initialDate">Initial Date</p>
				&mdash;
				<p className="finalDate">Final Date</p>
			</div>
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

export default function CVOutput() {
	return (
		<motion.section
			className="cvOutput"
			initial={{ transform: "translateY(100%)" }}
			animate={{
				transform: "translateY(0)",
				transition: { duration: 0.8 },
			}}
		>
			<AboutOutput />
			<ContactOutput />
			<div className="educationContainer">
				<div className="educationOutputTitle">
					<i className="fa-solid fa-graduation-cap"></i>
					Education
				</div>
				<EducationOutput />
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
