import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export const ArrowIcon = () => {
	const arrowStyles = {
		fontSize: 12,
		position: 'absolute',
		right: 20,
		top: 'calc(50% - 6px)',
	};

	return (
		<SvgIcon fill='none' viewBox='0 0 12 8' style={arrowStyles}>
			<path
				fill='#1073AF'
				fillRule='evenodd'
				d='M.293.316a.95.95 0 011.414 0L6 4.948 10.293.316a.95.95 0 011.414 0 1.14 1.14 0 010 1.526L6 8 .293 1.842a1.14 1.14 0 010-1.526z'
				clipRule='evenodd'
			/>
		</SvgIcon>
	);
};
