import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

export const HtmlTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: '#fff',
		color: '#000',
		borderRadius: 8,
		padding: '15px 23px',
		width: 226,
		minHeight: 102,
		border: '1px solid #F1F5F7',
		boxShadow: '0px 5px 21px rgba(0, 0, 0, 0.1)',
	},
	arrow: {
		color: '#fff',
	},
	tooltipPlacementRight: {
		margin: '0 0 0 26px',
	},
}))(Tooltip);

export const tooltipStyles = makeStyles({
	tooltipLabel: {
		minWidth: 0,
		width: 24,
		height: 24,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 0,
		borderRadius: '50%',
		background: '#F1F5F7',
		color: '#1272AE',
		fontSize: 14,
		lineHeight: '16px',
		marginLeft: 20,
		'&:hover': {
			background: '#F1F5F7',
		},
	},
	tooltipTitle: {
		fontSize: 18,
		lineHeight: '22px',
		marginBottom: 10,
		display: 'block',
	},
	tooltipText: {
		fontSize: 14,
		lineHeight: '17px',
	},
});
