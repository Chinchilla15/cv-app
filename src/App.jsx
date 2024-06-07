import "./styles/App.css";
import "./styles/ButtonsNav.css";
import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonsNav from "./components/ButtonsNav";
import { Fragment, useState } from "react";

function App() {
	const [activeComponent, setActiveComponent] = useState("GeneralInfo");
	return (
		<Fragment>
			<Header />
			<main>
				<div className="inputContainer">
					<ButtonsNav setActiveComponent={setActiveComponent} />
					<CVInput activeComponent={activeComponent} />
				</div>
				{/*<CVOutput />*/}
			</main>
			{/*
			<Footer />
			*/}
		</Fragment>
	);
}
export default App;
