import styles from '../../styles/records.module.css';

interface recordsProps {
	index: number,
	algorithm: string[],
	time: number
}

const Records = (props: recordsProps) => {
	return (
		<div className={styles.record} style={props.index % 2 ? { backgroundColor: '#ffffff05' } : {}}>
			<div className={styles.cell} >
				<h5>SOLVE</h5>
				<p style={{ color: 'cornflowerblue' }}>{props.index}</p>
			</div>
			<div className={styles.cell} >
				<h5>SCRAMBLE</h5>
				<p style={{ color: 'grey' }}>{props.algorithm.join(" ")}</p>
			</div>
			<div className={styles.cell} >
				<h5>TIME</h5>
				<p style={{ color: 'lightgreen' }}>{props.time}</p>
			</div>
		</div>
	)
}

export default Records;