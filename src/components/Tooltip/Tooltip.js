import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { HtmlTooltip, tooltipStyles } from './tooltipStyles';

export default function Tooltip({ tooltipTitle, tooltipText }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleTooltipClose = () => {
		setIsOpen(false);
	};

	const handleTooltipClick = () => {
		setIsOpen((prev) => !prev);
	};

	const styles = tooltipStyles();

	return (
		<ClickAwayListener onClickAway={handleTooltipClose}>
			<HtmlTooltip
				arrow
				title={
					<>
						<h5 className={styles.tooltipTitle}>{tooltipTitle}</h5>
						<p className={styles.tooltipText}>{tooltipText}</p>
					</>
				}
				placement='right-start'
				disableFocusListener
				disableHoverListener
				disableTouchListener
				onClose={handleTooltipClose}
				open={isOpen}
				PopperProps={{
					disablePortal: true,
				}}
			>
				<Button
					className={styles.tooltipLabel}
					onClick={handleTooltipClick}
				>
					?
				</Button>
			</HtmlTooltip>
		</ClickAwayListener>
	);
}
