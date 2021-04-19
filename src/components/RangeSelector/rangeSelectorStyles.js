import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

export const PrettoSlider = withStyles({
	root: {
		color: '#B4D6EC',
		height: 8,
		padding: '6.5px 0',
	},
	thumb: {
		height: 21,
		width: 21,
		backgroundColor: '#489DCF',
		boxShadow: '0px 5px 10px rgba(136, 193, 227, 0.28)',
		marginTop: -6.5,
		marginLeft: -10.5,
		'&:focus, &:hover, &$active': {
			boxShadow: '0px 5px 10px rgba(136, 193, 227, 0.28)',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
	},
	track: {
		height: 8,
		borderRadius: 3,
		backgroundColor: '#489DCF',
	},
	rail: {
		height: 8,
		borderRadius: 3,
	},
})(Slider);
