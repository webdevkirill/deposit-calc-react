import React from 'react';
import { Header } from '../../common/typography/typography';
import DepositTypeChooser from '../DepositTypeChooser/DepositTypeChooser';
import RangeSelector from '../RangeSelector/RangeSelector';

const tooltipConfig = [
	{
		id: 'depositeTime',
		title: 'Срок вклада',
		valueName: 'мес.',
		minValue: 1,
		maxValue: 24,
		step: 1,
		tooltipTitle: 'Тooltip 1',
		tooltipText: 'Text of tooltip 1',
	},
	{
		id: 'depositeSum',
		title: 'Сумма вклада',
		valueName: 'Р',
		minValue: 100000,
		maxValue: 1000000,
		step: 10000,
		tooltipTitle: 'Тooltip 2',
		tooltipText: 'Text of tooltip 2',
	},
];

export default function LeftSide() {
	return (
		<div>
			<Header mb={34}>Депозитный калькулятор</Header>
			<DepositTypeChooser />
			{tooltipConfig.map((config) => (
				<RangeSelector key={config.id} config={config} />
			))}
		</div>
	);
}
