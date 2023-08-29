import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
	return (
		<div className="container mt-5">
			<PersonCard firstName={"Bobby"} lastName={"Coleman"} age={32} hairColor={"Brown"} />
			<PersonCard firstName={"Michael"} lastName={"Scott"} age={48} hairColor={"Black"} />
			<PersonCard firstName={"Jim"} lastName={"Halpert"} age={30} hairColor={"Brown"} />
			<PersonCard firstName={"Pam"} lastName={"Beasley"} age={28} hairColor={"Dark Blonde"} />
		</div>
	);
}

export default App;
