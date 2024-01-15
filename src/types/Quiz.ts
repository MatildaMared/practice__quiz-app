export interface Quiz {
	id: string;
	title: string;
	icon: string;
	questions: Question[];
}

export interface Question {
	question: string;
	options: string[];
	answer: string;
}
