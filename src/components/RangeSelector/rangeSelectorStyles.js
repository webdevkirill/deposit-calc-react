import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export const RangeSlider = withStyles({
	root: {
		color: '#B4D6EC',
		height: 5,
		padding: '8px 0',
		width: 490,
	},
	thumb: {
		height: 21,
		width: 21,
		backgroundColor: '#489DCF',
		boxShadow: '0px 5px 10px rgba(136, 193, 227, 0.28)',
		marginTop: -8.5,
		marginLeft: -10.5,
		'&:focus, &:hover, &$active': {
			boxShadow: '0px 5px 10px rgba(136, 193, 227, 0.28)',
		},
	},
	active: {},
	track: {
		height: 5,
		borderRadius: 3,
		backgroundColor: '#489DCF',
	},
	rail: {
		height: 5,
		borderRadius: 3,
	},
})(Slider);

export const rangeSelectorStyles = makeStyles({
	container: {
		display: 'flex',
	},
	labelsContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: 7,
	},
	label: {
		fontSize: 16,
		lineHeight: '18px',
	},
	value: {
		paddingTop: 2,
		fontWeight: 500,
		fontSize: 22,
		lineHeight: '18px',
	},
});
