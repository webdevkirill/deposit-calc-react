import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ArrowIcon } from '../../common/icons';
import {
	BootstrapInput,
	depositTypeChooserStyles,
} from './depositTypeChooserStyles';
import { changeDepositType } from '../../store/actions';

export default function DepositTypeChooser() {
	const styles = depositTypeChooserStyles();
	const dispatch = useDispatch();
	const { depositType, data } = useSelector((state) => state);

	const depositTypeChangeHandler = (e) => {
		dispatch(changeDepositType(e.target.value));
	};

	return (
		<div className={styles.root}>
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
					{data.map((deposit) => (
						<option key={deposit.code} value={deposit.code}>
							{deposit.name}
						</option>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
