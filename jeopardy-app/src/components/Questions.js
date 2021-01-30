import React from 'react';

export default function Jeopardy(props) {
	return (
		<div className={'column'}>
			<button onClick={props.questions[0].answer}>Get Answer</button>
			<h2>
				Category: {props.questions[0].category.title}
				{''}
			</h2>{' '}
			<br />
			<h2>
				Points: {props.questions[0].value}
				{''}
			</h2>
			<br />
			<h2>
				Question: {props.questions[0].question}
				{''}
			</h2>
			<br />
			<h2>
				Answer: {props.questions[0].answer}
				{''}
			</h2>
		</div>
	);
}
