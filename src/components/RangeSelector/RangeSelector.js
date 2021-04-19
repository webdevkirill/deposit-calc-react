import React, { useState } from 'react';
import { RangeSlider, rangeSelectorStyles } from './rangeSelectorStyles';

export default function RangeSelector({ config }) {
	const { title, valueName, minValue, step } = config;
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
					max={24}
					onChange={rangeChangeHandler}
					value={rangeSlectorValue}
				/>
			</div>
			<p>Tooltip</p>
		</div>
	);
}
