import React from 'react';
import { Header } from '../../common/typography/typography';
import DepositTypeChooser from '../DepositTypeChooser/DepositTypeChooser';
import RangeSelector from '../RangeSelector/RangeSelector';
import ResultBlock from '../ResultBlock/ResultBlock';
import { useFetch } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

const rangesConfig = [
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
	const { isLoading } = useFetch('db.json');

	const state = useSelector((state) => state);
	console.log(state);

	if (isLoading) {
		return <p>Загрузка...</p>;
	}

	return (
		<div>
			<Header mb={34}>Депозитный калькулятор</Header>
			<DepositTypeChooser />
			{rangesConfig.map((range) => (
				<RangeSelector key={range.id} config={range} />
			))}
			<ResultBlock />
		</div>
	);
}
