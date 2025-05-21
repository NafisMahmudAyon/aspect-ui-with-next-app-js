"use client";

import { cn } from "../utils/cn";

export const DropdownList = ({ children, className = "", ...rest }) => {
	return (
		<div
			className={cn(
				"py-1 border border-primary-50 dark:border-primary-950 rounded-md shadow-lg bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 ",
				className
			)}
			{...rest}>
			{children}
		</div>
	);
};

