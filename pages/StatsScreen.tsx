import { NextPage } from 'next';
import NavBar from './components/navbar';

const StatsScreen: NextPage = () => {
	return (
		<div>
			<NavBar />
			<h1>Stats Screen</h1>
		</div>
	);
};

export default StatsScreen;