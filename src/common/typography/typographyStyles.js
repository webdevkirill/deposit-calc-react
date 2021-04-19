import { makeStyles } from '@material-ui/core/styles';

export const typographyStyles = makeStyles({
	header: {
		fontWeight: 500,
		fontSize: 30,
		lineHeight: 1.2,
		marginBottom: (props) => props.mb || 0,
		color: (props) => (props.secondBlack ? '#00111B' : '#000'),
	},
	subHeader: {
		fontWeight: 500,
		fontSize: 22,
		lineHeight: 18,
		marginBottom: (props) => props.mb || 0,
	},
});
