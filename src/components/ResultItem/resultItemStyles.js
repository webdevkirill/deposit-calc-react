import { makeStyles } from '@material-ui/core/styles';

export const resultItemStyles = makeStyles({
	root: {
		marginRight: 50,
		'&:last-of-type': {
			marginRight: 0,
		},
	},
	label: {
		fontSize: 14,
		lineHeight: '17px',
		color: '#7E878E',
		marginBottom: 5,
	},
	labelUnderlined: {
		color: '#B4D6EC',
		textDecoration: 'underline',
	},
	value: {
		fontWeight: 500,
		fontSize: 30,
		lineHeight: '36px',
		color: '#00111B',
	},
});
