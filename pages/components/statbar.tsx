import styles from '../../styles/statbar.module.css';

interface statBarProps {
	best: number,
	worst: number,
	average: number,
	lighten: boolean
}

const StatBar = (props: statBarProps) => {

	return (
		<div className={styles.statbar} style={props.lighten ? { backgroundColor: '#ffffff05' } : {}}>
			<div className={styles.cell} >
				<h5>BEST</h5>
				<p style={{ color: 'lightgreen' }}>{props.best}</p>
			</div>
			<div className={styles.cell} >
				<h5>WORST</h5>
				<p style={{ color: 'salmon' }}>{props.worst}</p>
			</div>
			<div className={styles.cell} >
				<h5>AVG</h5>
				<p style={{ color: 'cornflowerblue' }}>{props.average}</p>
			</div>
		</div>
	)
}

export default StatBar;