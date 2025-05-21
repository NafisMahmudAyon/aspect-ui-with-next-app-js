"use client";

import { cn } from "../utils/cn";

export const TableBody = ({ children, className = "" }) => {
	return (
		<tbody
			className={cn(
				"divide-y  divide-primary-50 border-b border-b-primary-50",
				className
			)}>
			{children}
		</tbody>
	);
};

