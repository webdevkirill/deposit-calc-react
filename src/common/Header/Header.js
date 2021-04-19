import React from 'react';
import { headerStyles } from './headerStyles';

export default function Header({ children, ...props }) {
	const styles = headerStyles(props);

	return <h3 className={styles.header}>children</h3>;
}
