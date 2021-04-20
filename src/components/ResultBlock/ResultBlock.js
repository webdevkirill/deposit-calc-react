import React from 'react';
import ResultItem from '../ResultItem/ResultItem';
import { resultBlockStyles } from './resultBlockStyles';
import { useSelector } from 'react-redux';

export default function ResultBlock() {
	const styles = resultBlockStyles();
	const { rate, depositeSumValue, monthValue } = useSelector(
		(state) => state
	);

	const { summ, benefit } = calcBenefits(rate, depositeSumValue, monthValue);

	const resultConfig = [
		{ id: 'procent', label: 'Процентная ставка', value: `${rate} %` },
		{
			id: 'sumAfterPeriod',
			label: 'Сумма через',
			value: `${summ},00 Р`,
			labelUnderlined: '24 мес',
		},
		{ id: 'money', label: 'Доход', value: `${benefit},00 Р` },
	];
	return (
		<div className={styles.root}>
			{resultConfig.map((item) => (
				<ResultItem key={item.id} {...item} />
			))}
		</div>
	);
}

const calcBenefits = (rate, depositeSumValue, monthValue) => {
	const monthСoeff = Math.floor(monthValue / 12) + (monthValue % 12) / 12;

	const summ =
		Math.floor((depositeSumValue * rate * monthСoeff) / 100) +
		depositeSumValue;
	const benefit = summ - depositeSumValue;
	return {
		summ,
		benefit,
	};
};
