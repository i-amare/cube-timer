import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import Timer from './components/timer';
import styles from '../styles/TimerScreen.module.css';

const TimerScreen: NextPage = () => {
	// Timer states
	const [startTimeState, setStartTimeState] = useState(new Date().getTime());
	const [timeElapsedState, setTimeElapsedState] = useState(0);
	const [countState, setCountState] = useState(false);

	// Increments counter
	useEffect(() => {
		const interval = setInterval(() => {
			if (countState) setTimeElapsedState(timeElapsedState + 10);
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, [timeElapsedState, countState]);

	// Keyboard shorcuts
	useEffect(() => {
		function onKeyPress(event: KeyboardEvent) {
			if (event.key) toggleCountState();
			console.log('triggered');
		}

		window.addEventListener('keypress', onKeyPress);

		return () => {
			window.removeEventListener('keypress', onKeyPress);
		};
	}, [countState]);

	/**
	 * Toggles the count state changing whether or no the clock increments itself
	 */
	function toggleCountState() {
		countState ? setCountState(false) : setCountState(true);
	}

	return (
		<div className={styles.container}>
			<NavBar />
			<Timer timeElapsed={timeElapsedState} />
		</div>
	)
};

export default TimerScreen;
