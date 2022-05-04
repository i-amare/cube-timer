import { NextPage } from "next";
import NavBar from "./components/navbar";

const SolvesScreen: NextPage = () => {
	return (
		<div className="SolveScreen">
			<NavBar />
			<h1>Solves Screen</h1>
		</div>
	)
}

export default SolvesScreen;