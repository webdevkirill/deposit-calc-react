import React from 'react';
import { Header } from '../../common/typography/typography';
import DepositTypeChooser from '../DepositTypeChooser/DepositTypeChooser';

export default function LeftSide() {
	return (
		<div>
			<Header mb={34}>Депозитный калькулятор</Header>
			<DepositTypeChooser />
		</div>
	);
}
