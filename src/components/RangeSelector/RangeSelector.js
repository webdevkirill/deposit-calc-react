import React, { useState } from 'react';
import { PrettoSlider } from './rangeSelectorStyles';

export default function RangeSelector({ config }) {
	const { title, valueName, minValue, step } = config;
	const [rangeSlectorValue, setRangeSlectorValue] = useState(minValue);

	const rangeChangeHandler = (e, newValue) => {
		setRangeSlectorValue(newValue);
	};

	return (
		<div>
			<PrettoSlider
				step={step}
				min={minValue}
				max={24}
				onChange={rangeChangeHandler}
				value={rangeSlectorValue}
			/>
		</div>
	);
}
