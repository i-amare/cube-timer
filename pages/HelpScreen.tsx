import { NextPage } from 'next';
import NavBar from './components/navbar';

const HelpScreen: NextPage = () => {
	return (
		<div>
			<NavBar />
			<h1>Help Screen</h1>
		</div>
	);
};

export default HelpScreen;
