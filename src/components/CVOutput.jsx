import { useState } from "react";
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
			<p>Initial Date</p>
			<p>Final Date</p>
			<h3>School Name</h3>
			<h4>Degree</h4>
		</Fragment>
	);
}

function WorkOutput() {
	return (
		<Fragment>
			<p>Initial Date</p>
			<p>Final Date</p>
			<h3>Role</h3>
			<h4>Company</h4>
			<p>Description</p>
		</Fragment>
	);
}

function SkillsOutput() {
	return (
		<div className="skillsContainer">
			<p>Category</p>
			<p>Skills</p>
		</div>
	);
}

export default function CVOutput() {
	return (
		<section className="cvOutput">
			<AboutOutput />
			<ContactOutput />
			<div className="educationContainer">
				<EducationOutput />
			</div>
			<div className="workContainer">
				<WorkOutput />
			</div>
			<SkillsOutput />
		</section>
	);
}
