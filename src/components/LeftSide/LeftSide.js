import React from 'react';
import { Header } from '../../common/typography/typography';
import DepositTypeChooser from '../DepositTypeChooser/DepositTypeChooser';
import RangeSelector from '../RangeSelector/RangeSelector';
import ResultBlock from '../ResultBlock/ResultBlock';
import { useFetch } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import { rangesConfigCreator } from './rangesConfigCreator';

export default function LeftSide() {
	const { isLoading } = useFetch('db.json');

	const state = useSelector((state) => state);
	console.log(state);

	const rangesConfig = rangesConfigCreator(state);

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
