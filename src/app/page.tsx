import Image from "next/image";
import styles from "./page.module.css";
import { quizzes } from "@/data.json";
import Link from "next/link";

export default async function Home() {
	return (
		<main className={styles.main}>
			<header className={styles.header}>
				<h1 className={styles.heading}>
					Welcome to the <span>Frontend Quiz!</span>
				</h1>
				<p className={styles.description}>Pick a subject to get started.</p>
			</header>
			<section className={styles.quizzes}>
				{quizzes.map((quiz) => (
					<Link href={`/quiz/${quiz.title}`} key={quiz.title}>
						<div className={styles.quiz}>
							<span className={styles.icon}>
								<Image
									src={quiz.icon}
									alt={quiz.title}
									width={30}
									height={30}
								/>
							</span>
							<h2>{quiz.title}</h2>
						</div>
					</Link>
				))}
			</section>
		</main>
	);
}
