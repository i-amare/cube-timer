import { NextPage } from 'next';
import NavBar from './components/navbar';
import StatBar from './components/statbar';
import Records from './components/records';
import Slider from './components/slider';
import styles from '../styles/StatsScreen.module.css';
import dummyData from './data.json';
import Chart from 'chart.js/auto';
Chart.register();
import { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';

interface solve {
	time: number,
	scramble: string[]
}


const StatsScreen: NextPage = () => {

	const [numOfEntries, setNumOfEntries] = useState(Math.min(20, dummyData.length));
	const labels: string[] = [];
	const dataPoints: solve[] = [];
	let worstTime = -Infinity, bestTime = Infinity, avgTime = 0, totalTime = 0;
	for (let i = 0; i < numOfEntries; i++) {
		labels.push(`${i + 1}`);
		dataPoints.push(dummyData[i]);
		const currentTime = dummyData[i].time;
		totalTime += currentTime;
		if (currentTime > worstTime) worstTime = currentTime;
		if (currentTime < bestTime) bestTime = currentTime;
	}
	avgTime = Math.round(totalTime / numOfEntries * 100) / 100;


	const file: ChartData<"line"> = {
		labels: labels,
		datasets: [
			{
				label: `Last ${numOfEntries} Solves`,
				data: dataPoints.map((val: solve) => {
					return val.time
				}),
				fill: true,
				backgroundColor: '#80cdc410',
				borderColor: '#80cdc4',
				cubicInterpolationMode: 'monotone',
				tension: 0.05,
			},
		],
	};

	const chartConfig: ChartOptions<'line'> = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				grid: {
					borderColor: '#fff'
				},
				display: true,
				title: {
					display: true,
					text: 'Solve'
				}
			},
			y: {
				grid: {
					borderColor: '#fff'
				},
				display: true,
				min: 0,
				title: {
					display: true,
					text: 'Time',
				},
			},
		},
	};

	function onSliderChange(value: number) {
		setNumOfEntries(value);
	}

	return (
		<div className={styles.statsscreen}>
			<NavBar />
			<StatBar lighten={true} best={bestTime} worst={worstTime} average={avgTime} />
			<div className={styles.inputs} >
				<Slider label='Data' min={0} max={dummyData.length} value={numOfEntries} change={onSliderChange} />
			</div>
			<div className={styles.container}>
				<div className={styles.chart}>
					<Line data={file} options={chartConfig} />
				</div>
			</div>
			<div className={styles.records}>
				{
					dataPoints.map((solve: solve, index: number) => {
						return (
							<Records key={`${solve.scramble}-${solve.time}`} algorithm={solve.scramble} time={solve.time} index={index + 1} />
						)
					})
				}
			</div>
		</div>
	);
};

export default StatsScreen;
