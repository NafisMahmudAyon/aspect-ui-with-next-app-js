"use client";

import { cn } from "../utils/cn";

export const TabList = ({ children, className = "", ...rest }) => {
	return (
		<div className={cn("mb-4 flex space-x-2", className)} {...rest}>
			{children}
		</div>
	);
};

