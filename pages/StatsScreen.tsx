import { NextPage } from 'next';
import NavBar from './components/navbar';
import StatBar from './components/statbar';
import styles from '../styles/StatsScreen.module.css';
import dummyData from './data.json';
import Chart from 'chart.js/auto';
Chart.register();
import { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Records from './components/records';

interface solve {
	time: number,
	scramble: string[]
}


const StatsScreen: NextPage = () => {

	const file: ChartData<"line"> = {
		labels: dummyData.map((val: solve, idx: number) => `${idx + 1}`),
		datasets: [
			{
				label: `Last ${dummyData.length} Solves`,
				data: dummyData.map((val: solve) => {
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

	return (
		<div className={styles.statsscreen}>
			<NavBar />
			<div className={styles.container}>
				<div className={styles.chart}>
					<Line data={file} options={chartConfig} />
				</div>
				<StatBar lighten={true} best={25.23} worst={34.03} average={29.32} />
				<StatBar lighten={false} best={25.23} worst={34.03} average={29.32} />
				<StatBar lighten={true} best={25.23} worst={34.03} average={29.32} />
			</div>
			<div className={styles.records}>
				{
					dummyData.map((solve: solve, index: number) => {
						return (
							<Records algorithm={solve.scramble} time={solve.time} index={index + 1} />
						)
					})
				}
			</div>
		</div>
	);
};

export default StatsScreen;
