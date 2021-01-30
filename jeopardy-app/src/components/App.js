import React, { useState, useEffect } from 'react';
import Counter from './JepCounter';
import Jeopardy from './Questions';

export default function App(props) {
	const [questions, updateQuestion] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('http://jservice.io/api/random');
				const data = await response.json();
				updateQuestion(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	return (
		<div>
			<div>
				<h1>Welcome to Jeopardy</h1>
				<Counter questions={questions} />
				<h1>Let's Play</h1>
			</div>
			<div className={'Page'}>
				{Object.keys(questions).length ? (
					<Jeopardy questions={questions} />
				) : (
					''
				)}
			</div>
		</div>
	);
}
