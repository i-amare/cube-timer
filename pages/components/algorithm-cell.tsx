import styles from "../../styles/algorithm-cell.module.css";

interface algorithmCellProps {
	name: string,
	group: string,
	algorithm: string[],
	bestTime: number,
	avergeTime: number,
	lighten: number;
}

const AlgorithmCell = (props: algorithmCellProps) => {
	return (
		<div className={styles.cell} style={props.lighten % 2 ? { backgroundColor: '#ffffff05' } : {}} >
			<div>
				<h5>NAME</h5>
				<p>{props.name}</p>
			</div>
			<div>
				<h5>GROUP</h5>
				<p>{props.group}</p>
			</div>
			<div>
				<h5>ALGORITHM</h5>
				<p>{props.algorithm.join(" ")}</p>
			</div>
			<div>
				<h5>BEST</h5>
				<p>{props.bestTime}</p>
			</div>
			<div>
				<h5>AVG</h5>
				<p>{props.avergeTime}</p>
			</div>
		</div>
	)
}

export default AlgorithmCell;