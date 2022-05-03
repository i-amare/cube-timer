import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import TimerScreen from "./TimerScreen";

const Home: NextPage = () => {
	const name = "Nsovo";

	return (
		<div className={styles.container}>
      <TimerScreen />
		</div>
	);
};

export default Home;
