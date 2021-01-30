import React, { useState } from 'react';

export default function App(props) {
	const [score, updateScore] = useState(0);

	const increaseScore = () => updateScore(score + props.questions[0].value);
	const decreaseScore = () => updateScore(score - props.questions[0].value);
	const reset = () => updateScore(0);

	return (
		<div>
			<span>Score: {score} </span> <br />
			<button onClick={increaseScore}>Correct</button>
			<br />
			<button onClick={decreaseScore}>Wrong</button>
			<br />
			<button onClick={reset}>Reset</button>
			<br />
		</div>
	);
}
