import { CSSProperties } from "react";

interface sliderProps {
	value: number;
	min: number;
	max: number;
	label: string;
	change: (value: number) => void;
}

const Slider = (props: sliderProps) => {
	const sliderStyling: CSSProperties = {
		display: "flex",
		alignContent: "center",
		justifyContent: "center",
		gap: '10px',
		width: '100%',
	};

	return (
		<div className="Slider" style={sliderStyling}>
			<b>
				{props.label}:
			</b>
			<input
				style={{ width: '100%' }}
				type="range"
				defaultValue={props.value}
				min={props.min}
				max={props.max}
				onChange={(event) =>
					props.change(parseInt(event.target.value))
				}
			/>
			<b>{props.value}</b>
		</div>
	);
};

export default Slider;
