import { getQuizById } from "@/utils/quiz";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
	const quiz = getQuizById(params.id);
	return <div>Quiz: {quiz?.title}</div>;
}
