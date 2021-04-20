import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { HtmlTooltip, tooltipStyles } from './tooltipStyles';
import Typography from '@material-ui/core/Typography';

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
						<span className={styles.tooltipTitle}>
							{tooltipTitle}
						</span>
						<span className={styles.tooltipText}>
							{tooltipText}
						</span>
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
