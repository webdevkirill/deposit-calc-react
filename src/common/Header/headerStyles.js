import { makeStyles } from '@material-ui/core/styles';

export const headerStyles = makeStyles({
	header: {
		fontWeight: 500,
		fontSize: '30px',
		lineHeight: 1.2,
		marginBottom: (props) => props.mb,
	},
});
