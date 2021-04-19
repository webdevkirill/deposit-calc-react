import React, { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import { RangeSlider, rangeSelectorStyles } from './rangeSelectorStyles';

export default function RangeSelector({ config }) {
	const {
		title,
		valueName,
		minValue,
		maxValue,
		step,
		tooltipTitle,
		tooltipText,
	} = config;
	const [rangeSlectorValue, setRangeSlectorValue] = useState(minValue);

	const rangeChangeHandler = (e, newValue) => {
		setRangeSlectorValue(newValue);
	};

	const styles = rangeSelectorStyles();

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.labelsContainer}>
					<p className={styles.label}>{title}</p>
					<p
						className={styles.value}
					>{`${rangeSlectorValue} ${valueName}`}</p>
				</div>
				<RangeSlider
					step={step}
					min={minValue}
					max={maxValue}
					onChange={rangeChangeHandler}
					value={rangeSlectorValue}
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
