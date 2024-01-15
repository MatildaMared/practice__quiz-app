"use client";
import { Quiz } from "@/types/Quiz";
import React from "react";

interface Props {
	quiz: Quiz;
}

function Questions({ quiz }: Props) {
	const [currentQuestion, setCurrentQuestion] = React.useState(0);

	return (
		<div>
			<h2>{quiz.questions[currentQuestion].question}</h2>
			<ul>
				{/* TODO: Continue here */}
				{quiz.questions[currentQuestion].options.map((answer) => (
					<li key={answer}>
						<button>{answer}</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Questions;
