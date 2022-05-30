import { CSSProperties } from "react";
import Image from "next/image";
import resetIcon from "../assets/restart.png";

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

	const imageStyling: CSSProperties = {
		margin: 'auto',
		width: '35px',
		height: '35px',
		padding: '5px',
		backgroundColor: 'var(--highlight-colour)',
		border: 'none',
		borderRadius: '10px'
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
		<div style={{ ...containerStyling, flexDirection: 'column' }}>
			<div style={imageStyling}>
				<Image src={resetIcon} alt="reset icon" color="white" />
			</div>
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
		</div>
	)
}

export default TimerControls;