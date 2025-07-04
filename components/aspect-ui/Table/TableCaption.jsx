"use client";

import { cn } from "../../utils/cn";

export const TableCaption = ({
	children,
	className = "",
	position = "bottom",
	...rest
}) => {
	return (
		<caption
			className={cn(
				"mb-2 mt-4 text-sm text-text-muted",
				position === "top" ? "caption-top" : "caption-bottom",
				className
			)}
			{...rest}>
			{children}
		</caption>
	);
};
