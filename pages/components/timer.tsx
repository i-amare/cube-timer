import { CSSProperties } from 'react';
import styles from '../../styles/timer.module.css';

interface timerProps {
	timeElapsed: number;
}

const Timer = (props: timerProps) => {
	/**
	 * Formats time elapsed into mm:ss format
	 * @param milliSeconds The time elapsed in millisecods
	 * @returns A string represnting the time passed in mm:ss format
	 */
	function formatTime(milliSeconds: number) {
		const minutes = Math.floor((milliSeconds % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((milliSeconds % (1000 * 60)) / 1000);
		const hundredths = Math.floor((milliSeconds % 1000) / 10);
		return `${minutes ? pad(minutes) + ' : ' : ''}${pad(seconds)} : ${pad(
			hundredths
		)}`;
	}

	/**
	 * Pads single digit number with 0
	 * @param num A number
	 * @returns A string of the number padded with a 0 if it's a single digit
	 */
	function pad(num: number) {
		if (num < 10) {
			return '0' + num;
		}
		return num + '';
	}

	return (
		<div className={styles.timer}>
				<p>{formatTime(props.timeElapsed)}</p>
		</div>
	);
};

export default Timer;
