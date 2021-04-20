import React from 'react';
import Grid from '@material-ui/core/Grid';
import { wrapperStyles } from './wrapperStyles';

export default function Wrapper({ children }) {
	const styles = wrapperStyles();

	return (
		<Grid
			container
			direction='row'
			justify='center'
			alignItems='stretch'
			className={styles.root}
		>
			{children}
		</Grid>
	);
}
