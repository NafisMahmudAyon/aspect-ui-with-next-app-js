"use client";

import { cn } from "../utils/cn";

export const TableCell = ({ children, className = "", colSpan, ...rest }) => {
	return (
		<td
			className={cn(
				"px-6 py-3 align-middle text-body2 font-medium text-primary-800 dark:text-primary-100 [&:has([role=checkbox])]:pr-0",
				className
			)}
			colSpan={colSpan}
			{...rest}>
			{children}
		</td>
	);
};

