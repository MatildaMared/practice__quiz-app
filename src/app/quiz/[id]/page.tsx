import { getQuizById } from "@/utils/quiz";
import React from "react";
import Image from "next/image";
import Questions from "@/components/Questions";

export default function Page({ params }: { params: { id: string } }) {
	const quiz = getQuizById(params.id);
	console.log(quiz);

	if (!quiz) {
		return <div>Quiz not found</div>;
	}

	return (
		<div>
			<h1>{quiz.title}</h1>
			<Image src={quiz.icon} alt={quiz.title} width={30} height={30} />
			<Questions quiz={quiz} />
		</div>
	);
}
