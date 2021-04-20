import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import { RangeSlider, rangeSelectorStyles } from './rangeSelectorStyles';
import { useDispatch, useSelector } from 'react-redux';

export default function RangeSelector({ config }) {
	const {
		title,
		valueName,
		minValue,
		maxValue,
		step,
		tooltipTitle,
		tooltipText,
		onChange,
		id,
	} = config;

	const dispatch = useDispatch();
	const monthValue = useSelector((state) => state[id]);
	const rangeChangeHandler = (e, newValue) => {
		dispatch(onChange(newValue));
	};

	const styles = rangeSelectorStyles();

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.labelsContainer}>
					<p className={styles.label}>{title}</p>
					<p
						className={styles.value}
					>{`${monthValue} ${valueName}`}</p>
				</div>
				<RangeSlider
					step={step}
					min={minValue}
					max={maxValue}
					onChange={rangeChangeHandler}
					value={monthValue}
				/>
			</div>
			<p>
				<Tooltip
					tooltipTitle={tooltipTitle}
					tooltipText={tooltipText}
				/>
			</p>
		</div>
	);
}
