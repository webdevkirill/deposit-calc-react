import React from 'react';
import { Header } from '../../common/typography/typography';
import DepositTypeChooser from '../DepositTypeChooser/DepositTypeChooser';
import RangeSelector from '../RangeSelector/RangeSelector';

const config = {
	title: 'Срок вклада',
	valueName: 'мес.',
	minValue: 1,
	step: 1,
};

export default function LeftSide() {
	return (
		<div>
			<Header mb={34}>Депозитный калькулятор</Header>
			<DepositTypeChooser />
			<RangeSelector config={config} />
		</div>
	);
}
