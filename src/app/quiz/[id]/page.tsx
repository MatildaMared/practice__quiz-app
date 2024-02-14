import { getQuizById } from "@/utils/quiz";
import React from "react";
import Image from "next/image";
import Questions from "@/components/Questions";
import styles from "./page.module.css";

export default function Page({ params }: { params: { id: string } }) {
	const quiz = getQuizById(params.id);

	if (!quiz) {
		return <div>Quiz not found</div>;
	}

	return (
		<div>
			<header className={styles.header}>
				<div className={styles.icon}>
					<Image
						src={`./../${quiz.icon}`}
						alt={quiz.title}
						width={36}
						height={36}
					/>
				</div>
				<h1>{quiz.title}</h1>
			</header>
			<Questions quiz={quiz} />
		</div>
	);
}
