"use client";

import { cn } from "../../utils/cn";

export const SidebarFooter = ({ children, className = "", ...rest }) => {
	return (
		<div
			className={cn(
				"border-t-2 border-border transition-all duration-200 ease-in-out px-2.5 py-3",
				className
			)}
			{...rest}>
			{children}
		</div>
	);
};
