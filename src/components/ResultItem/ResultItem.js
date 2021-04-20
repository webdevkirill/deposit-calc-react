import React from 'react';
import { resultItemStyles } from './resultItemStyles';

export default function ResultItem({
	label = '',
	value = '',
	labelUnderlined,
}) {
	const styles = resultItemStyles();

	return (
		<div className={styles.root}>
			<p className={styles.label}>
				{label}
				{labelUnderlined ? (
					<>
						&nbsp;
						<span className={styles.labelUnderlined}>
							{labelUnderlined}
						</span>
					</>
				) : (
					''
				)}
			</p>
			<p className={styles.value}>{value}</p>
		</div>
	);
}
