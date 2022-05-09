import { CSSProperties } from "react";
import styles from "../../styles/slider.module.css";

interface sliderProps {
	value: number;
	min: number;
	max: number;
	label: string;
	change: (value: number) => void;
}

const Slider = (props: sliderProps) => {
	return (
		<div className={styles.slider} >
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
