import { makeStyles } from '@material-ui/core/styles';

export const rightSideStyles = makeStyles((theme) => ({
	root: {
		marginTop: 70,
		marginLeft: 85,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	img: {
		width: 290,
		height: 182,
		boxShadow: '0px 9px 21px 2px rgba(60, 72, 104, 0.2)',
	},
}));
