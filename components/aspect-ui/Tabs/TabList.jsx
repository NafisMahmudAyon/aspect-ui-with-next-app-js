"use client";

import { cn } from "../../utils/cn";

export const TabList = ({ children, className = "", ...rest }) => {
	return (
		<div
			className={cn(
				"mb-4 space-x-2 bg-bg text-text rounded-md p-[3px] inline-flex items-center",
				className
			)}
			{...rest}>
			{children}
		</div>
	);
};
