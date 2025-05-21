"use client";

import { cn } from "../utils/cn";

export const TableRow = ({ children, className = "" }) => {
	return (
		<tr
			className={cn(
				"data-[state=selected]:bg-primary-100 dark:border-b-primary-800 hover:bg-primary-100/50 dark:hover:bg-primary-800/50",
				className
			)}>
			{children}
		</tr>
	);
};

