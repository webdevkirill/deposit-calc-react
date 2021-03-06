import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

export const depositTypeChooserStyles = makeStyles({
	root: {
		marginBottom: 37,
	},
	label: {
		fontSize: 18,
		lineHeight: 1,
		marginBottom: 15,
	},
	input: {
		width: 490,
	},
});

export const BootstrapInput = withStyles((theme) => ({
	input: {
		borderRadius: 3,
		position: 'relative',
		backgroundColor: 'transparent',
		border: '1px solid #B4D6EC',
		fontSize: 16,
		padding: '22px 20px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		outline: 'none',
		maxWidth: 490,
		width: '100%',
		'&:focus': {
			borderRadius: 3,
			borderColor: '#80bdff',
			backgroundColor: 'transparent',
		},
	},
}))(InputBase);
