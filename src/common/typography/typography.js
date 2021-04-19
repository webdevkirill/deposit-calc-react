import React from 'react';
import { typographyStyles } from './typographyStyles';

export const Header = ({ children, ...props }) => {
	const styles = typographyStyles(props);
	return <h3 className={styles.header}>children</h3>;
};

export const SubHeader = ({ children, ...props }) => {
	const styles = typographyStyles(props);
	return <h4 className={styles.subHeader}>children</h4>;
};
