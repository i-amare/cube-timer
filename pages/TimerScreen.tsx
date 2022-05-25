import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import Timer from './components/timer';
import TimerControls from './components/timer-controls';
import styles from '../styles/TimerScreen.module.css';

const TimerScreen: NextPage = () => {
	// Timer states
	const [timeElapsedState, setTimeElapsedState] = useState(0);
	const [timerState, setTimerState] = useState(false);

	// Increments counter
	useEffect(() => {
		const interval = setInterval(() => {
			if (timerState) setTimeElapsedState(timeElapsedState + 10);
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, [timeElapsedState, timerState]);

	// Keyboard shorcuts
	useEffect(() => {
		function onKeyPress(event: KeyboardEvent) {
			if (event.key) toggleTimerState();
		}

		window.addEventListener('keypress', onKeyPress);

		return () => {
			window.removeEventListener('keypress', onKeyPress);
		};
	}, [timerState]);

	/**
	 * Toggles the count state changing whether or no the clock increments itself
	 */
	function toggleTimerState() {
		timerState ? setTimerState(false) : setTimerState(true);
	}

	return (
		<div className={styles.container}>
			<NavBar />
			<Timer timeElapsed={timeElapsedState} />
			<TimerControls toggleTimer={toggleTimerState} timerState={timerState} />	
		</div>
	)
};

export default TimerScreen;
