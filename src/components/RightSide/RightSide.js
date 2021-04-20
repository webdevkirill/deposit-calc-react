import React from 'react';
import { rightSideStyles } from './rightSideStyles';
import img from '../../img/rightSide.png';

export default function RightSide() {
	const styles = rightSideStyles();
	return (
		<div className={styles.root}>
			<img
				src={img}
				alt='Изображение приложения'
				className={styles.img}
			/>
		</div>
	);
}
