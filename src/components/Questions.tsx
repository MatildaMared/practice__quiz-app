"use client";
import { Quiz } from "@/types/Quiz";
import React from "react";

interface Props {
	quiz: Quiz;
}

function Questions({ quiz }: Props) {
	const [currentQuestion, setCurrentQuestion] = React.useState(0);

	return <div>Questions</div>;
}

export default Questions;
