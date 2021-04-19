import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ArrowIcon } from '../../common/ArrowIcon';
import {
	BootstrapInput,
	depositTypeChooserStyles,
} from './depositTypeChooserStyles';

export default function DepositTypeChooser() {
	const styles = depositTypeChooserStyles();
	const [depositType, setDepositType] = useState(1);

	const depositTypeChangeHandler = (e) => {
		setDepositType(e.target.value);
	};

	return (
		<div>
			<p className={styles.label}>Вклад</p>
			<FormControl variant='outlined' className={styles.input}>
				<Select
					native
					value={depositType}
					onChange={depositTypeChangeHandler}
					id='deposit-type-select'
					input={<BootstrapInput />}
					IconComponent={ArrowIcon}
				>
					<option value={1}>Первый</option>
					<option value={2}>Второй</option>
					<option value={3}>Третий</option>
				</Select>
			</FormControl>
		</div>
	);
}
