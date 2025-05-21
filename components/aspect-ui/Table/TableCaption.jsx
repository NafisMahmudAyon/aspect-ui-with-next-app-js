"use client";

import { cn } from "../utils/cn";

export const TableCaption = ({
	children,
	className = "",
	position = "top",
	...rest
}) => {
	return (
		<caption
			className={cn(
				"mb-2 text-sm text-primary-800 dark:text-primary-200",
				position === "top" ? "caption-top" : "caption-bottom",
				className
			)}
			{...rest}>
			{children}
		</caption>
	);
};

