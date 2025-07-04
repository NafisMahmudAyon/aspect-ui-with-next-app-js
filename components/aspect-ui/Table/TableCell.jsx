"use client";

import { cn } from "../../utils/cn";

export const TableCell = ({ children, className = "", colSpan, ...rest }) => {
	return (
		<td
			className={cn("p-2 align-middle whitespace-nowrap text-sm", className)}
			colSpan={colSpan}
			{...rest}>
			{children}
		</td>
	);
};
