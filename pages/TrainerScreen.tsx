import { NextPage } from "next";
import NavBar from "./components/navbar";
import AlgorithmCell from "./components/algorithm-cell";
import styles from "../styles/TrainerScreen.module.css";

const TrainerScreen: NextPage = () => {
	const cells = []
	for (let i = 0; i < 35; i++) {
		cells.push('')
	}

	return (
		<div className={styles.timerScreen} >
			<NavBar />
			<div className={styles.algs}>
				{
					cells.map((val: any, idx: number) => {
						return (
							<AlgorithmCell name={`${idx + 1}`} algorithm={[
								"R'",
								"U",
								"B",
								"F'",
								"L",
								"U",
								"B",
								"D",
								"L'",
								"B'",
								"D",
								"B",
								"B",
								"L'",
								"U'"
							]} avergeTime={6.72} bestTime={4.76} group='Dot' lighten={idx} />
						)
					})
				}
			</div>
		</div>
	)
}

export default TrainerScreen;