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
	const [selectedAnswer, setSelectedAnswer] = React.useState<string>();

	const handleAnswer = (answer: string) => {
		const realAnswer = quiz.questions[currentQuestion].answer;
		const isCorrect = realAnswer === answer;
		console.log("The anser is", isCorrect ? "correct" : "incorrect");

		setAnswers([
			...answers,
			{
				question: currentQuestion,
				answer,
				isCorrect,
			},
		]);
	};

	const handleNextQuestion = () => {
		if (currentQuestion + 1 < quiz.questions.length) {
			setSelectedAnswer(undefined);
			setCurrentQuestion((prev) => prev + 1);
		} else {
			console.log(answers);
		}
	};

	const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

	const isAnswerCorrectAndFinal = (question: number, answer: string) => {
		console.log("Checking", question, answer);
		const selected = answers.find(
			(a) => a.question === question && a.answer === answer
		);

		console.log("Selected", selected);

		if (!selected) {
			console.log("will return false");
			return false;
		}

		console.log("will return", selected.isCorrect);
		return selected.isCorrect;
	};

	return (
		<section className={styles.wrapper}>
			<div className={styles.info}>
				<p>
					Question {currentQuestion + 1} of {quiz.questions.length}
				</p>
				<h2>{quiz.questions[currentQuestion].question}</h2>
			</div>
			<ul className={styles.questions}>
				{quiz.questions[currentQuestion].options.map((answer, index) => (
					<li
						onClick={() => setSelectedAnswer(answer)}
						key={answer}
						className={`${styles.question} ${
							selectedAnswer === answer
								? isAnswerCorrectAndFinal(currentQuestion, answer)
									? styles.questionCorrect
									: styles.selected
								: ""
						} ${
							isAnswerCorrectAndFinal(currentQuestion, answer) &&
							styles.questionCorrect
						}`}
					>
						<div className={styles.icon}>
							<span>{ALPHABET[index]}</span>
						</div>
						<p className={styles.answer}>{answer}</p>
					</li>
				))}
				<button
					className={styles.button}
					onClick={() => handleAnswer(selectedAnswer!)}
				>
					Submit
				</button>
				<button className={styles.button} onClick={handleNextQuestion}>
					Next Question
				</button>
			</ul>
		</section>
	);
}

export default Questions;
