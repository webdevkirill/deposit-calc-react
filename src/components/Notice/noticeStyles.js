import { makeStyles } from '@material-ui/core/styles';

export const noticeStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'nowrap',
		maxWidth: 340,
		border: '1px solid #B4D6EC',
		borderRadius: 3,
		padding: '12px 27px 8px 12px',
	},
	text: {
		fontSize: 14,
		lineHeight: '16px',
		color: '#7C878E',
	},
}));
