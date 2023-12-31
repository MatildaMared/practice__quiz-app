import Image from "next/image";
import styles from "./page.module.css";
import { quizzes } from "@/data.json";

export default async function Home() {
	console.log(quizzes.length);
	return (
		<main className={styles.main}>
			<h1>Quiz App</h1>
		</main>
	);
}
