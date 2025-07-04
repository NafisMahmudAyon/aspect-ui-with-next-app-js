"use client";

import { cn } from "../../utils/cn";

export const SidebarHeader = ({ children, className = "", ...rest }) => {
	return (
		<div
			className={cn(
				"border-b-2 border-border text-text transition-all duration-200 ease-in-out px-2.5 py-3",
				className
			)}
			{...rest}>
			{children}
		</div>
	);
};
