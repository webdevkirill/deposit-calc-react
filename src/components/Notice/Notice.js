import React from 'react';
import { QuestionIcon } from '../../common/icons';
import { noticeStyles } from './noticeStyles';

export default function Notice() {
	const styles = noticeStyles();
	return (
		<div className={styles.root}>
			<QuestionIcon />
			<p className={styles.text}>
				Расчеты калькулятора являются предварительными. Для расчета
				дохода применяются процентные ставки, действующие на момент
				проведения расчетов.
			</p>
		</div>
	);
}
