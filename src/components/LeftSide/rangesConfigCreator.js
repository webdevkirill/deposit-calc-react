import { changeMonthValue, changeSumValue } from '../../store/actions';

export const rangesConfigCreator = (state) => {
	return [
		{
			id: 'monthValue',
			title: 'Срок вклада',
			valueName: 'мес.',
			minValue: state.periodFrom,
			maxValue: 150,
			step: 1,
			tooltipTitle: 'Тooltip 1',
			tooltipText: 'Text of tooltip 1',
			onChange: changeMonthValue,
		},
		{
			id: 'depositeSumValue',
			title: 'Сумма вклада',
			valueName: 'Р',
			minValue: state.sumFrom,
			maxValue: 100000000,
			step: 10000,
			tooltipTitle: 'Тooltip 2',
			tooltipText: 'Text of tooltip 2',
			onChange: changeSumValue,
		},
	];
};
