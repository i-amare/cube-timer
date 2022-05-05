import { NextPage } from 'next';
import NavBar from './components/navbar';
import styles from '../styles/StatsScreen.module.css';
import Chart from 'chart.js/auto';
Chart.register();
import { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';

const StatsScreen: NextPage = () => {
	const times: number[] = [];
	const dataLength = 20;
	for (let i = 0; i < dataLength; i++) {
		times.push(Math.round(Math.random() * 10) + 20);
	}

	const data: ChartData<"line"> = {
		labels: times.map((val: number, idx: number) => `${idx + 1}`),
		datasets: [
			{
				label: `Last ${dataLength} Solves`,
				data: times,
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

	return (
		<div className={styles.container}>
			<NavBar />
			<div className={styles.chart}>
				<Line data={data} options={chartConfig} />
			</div>
		</div>
	);
};

export default StatsScreen;
