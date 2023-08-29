import { useState } from "react";

const PersonCard = (props) => {
	const { firstName, lastName, age, hairColor } = props;

	const [state, setState] = useState(age);

	const handleClick = () => {
		setState(state + 1);
	};

	return (
		<div className="card shadow mb-3" style={{ width: 400 }}>
			<div className="card-body">
				<h1>
					{lastName}, {firstName}
				</h1>
				<p>Age: {state}</p>
				<p>Hair Color: {hairColor}</p>
				<div className="text-center">
					<button className="btn btn-secondary" onClick={handleClick}>
						Birthday Button for {firstName} {lastName}
					</button>
				</div>
			</div>
		</div>
	);
};

export default PersonCard;
