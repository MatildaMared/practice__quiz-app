import { quizzes } from "@/data.json";

export function getAllQuizzes() {
	return quizzes;
}

export function getQuizById(id: string) {
	return quizzes.find((quiz) => quiz.id === id);
}
