import "../styles/App.css";
import { useState } from "react";

function Input({ label, type, placeholder }) {
	return (
		<label>
			{label}
			<input type={type} placeholder={placeholder}></input>
		</label>
	);
}
function GeneralInfo() {
	return (
		<div className="generalInfo">
			<Input label="Name" />
			<Input label="Email" type="email" placeholder="example@mail.com" />
			<Input label="Phone" type="tel" />
		</div>
	);
}

function EducationInfo() {
	return (
		<div className="educationInfo">
			<Input label="Education " />
		</div>
	);
}

function ProfInfo() {
	return (
		<div className="profInfo">
			<Input label="Professional" />
		</div>
	);
}
export default function CVInput() {
	return (
		<section className="cvInput">
			<GeneralInfo />
		</section>
	);
}
