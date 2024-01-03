import Image from "next/image";
import styles from "./page.module.css";
import { quizzes } from "@/data.json";
import Link from "next/link";

export default async function Home() {
	console.log(quizzes.length);
	return (
		<main className={styles.main}>
			<h1>
				Welcome to the <span>Frontend Quiz!</span>
			</h1>
			<p>Pick a subject to get started</p>
			<section>
				{quizzes.map((quiz) => (
					<Link key={quiz.title} href={`/quiz/${quiz.title}`}>
						<Image src={quiz.icon} alt={quiz.title} width={200} height={200} />
						<h2>{quiz.title}</h2>
					</Link>
				))}
			</section>
		</main>
	);
}
