"use client";

import { cn } from "../utils/cn";

export const TableHeadCell = ({ children, className = "" }) => {
	return (
		<th
			className={cn(
				"px-6 py-3 capitalize h-14 bg-primary-100 text-left align-middle text-body1 font-medium text-primary-900 dark:bg-primary-800 dark:text-primary-100 [&:has([role=checkbox])]:pr-0",
				className
			)}>
			{children}
		</th>
	);
};

