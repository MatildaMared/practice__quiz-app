"use client";
import { Quiz } from "@/types/Quiz";
import React from "react";
import styles from "./questions.module.css";

interface Props {
	quiz: Quiz;
}

interface Answer {
	question: number;
	answer: string;
	isCorrect: boolean;
}

function Questions({ quiz }: Props) {
	const [currentQuestion, setCurrentQuestion] = React.useState(0);
	const [answers, setAnswers] = React.useState<Answer[]>([]);

	const handleAnswer = (answer: string) => {
		const realAnswer = quiz.questions[currentQuestion].answer;
		const isCorrect = realAnswer === answer;

		setAnswers([
			...answers,
			{
				question: currentQuestion,
				answer,
				isCorrect,
			},
		]);

		console.log(answers);

		if (currentQuestion + 1 < quiz.questions.length) {
			setCurrentQuestion((prev) => prev + 1);
		} else {
			console.log(answers);
		}
	};

	return (
		<div>
			<h2>{quiz.questions[currentQuestion].question}</h2>
			<ul className={styles.questions}>
				{quiz.questions[currentQuestion].options.map((answer) => (
					<li key={answer} className={styles.question}>
						<button onClick={() => handleAnswer(answer)}>{answer}</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Questions;
