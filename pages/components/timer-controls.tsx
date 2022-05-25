import { CSSProperties } from "react";

interface timerControlProps {
	toggleTimer: () => void;
	timerState: boolean
}

const TimerControls = (props: timerControlProps) => {

	const containerStyling: CSSProperties = {
		margin: 'auto',
		display: "flex",
		alignContent: 'center',
		justifyContent: 'center',
		gap: '50px'
	}

	const btnStyling: CSSProperties = {
		width: '100px',
		height: '40px',
		color: 'white',
		backgroundColor: 'var(--highlight-colour)',
		border: 'none',
		borderRadius: '10px'
	}

	return (
		<div style={containerStyling}>
			<button style={btnStyling}>
				<b>
					+2
				</b>
			</button>
			<button style={btnStyling} onClick={props.toggleTimer}>
				<b>
					{props.timerState ? 'STOP' : 'START'}
				</b>
			</button>
			<button style={btnStyling}>
				<b>
					DNF
				</b>
			</button>
		</div>
	)
}

export default TimerControls;