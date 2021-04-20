import React from 'react';
import ResultItem from '../ResultItem/ResultItem';
import { resultBlockStyles } from './resultBlockStyles';

export default function ResultBlock() {
	const styles = resultBlockStyles();
	const resultConfig = [
		{ id: 'procent', label: 'Процентная ставка', value: '12,1%' },
		{
			id: 'sumAfterPeriod',
			label: 'Сумма через',
			value: '1 223 155,00 Р',
			labelUnderlined: '24 мес',
		},
		{ id: 'money', label: 'Доход', value: '23 155,00 Р' },
	];
	return (
		<div className={styles.root}>
			{resultConfig.map((item) => (
				<ResultItem key={item.id} {...item} />
			))}
		</div>
	);
}
