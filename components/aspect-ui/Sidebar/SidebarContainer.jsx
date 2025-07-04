"use client";

import { cn } from "../../utils/cn";

export const SidebarContainer = ({ children, className = "", ...rest }) => {
	return (
		<div
			className={cn("grow overflow-y-auto my-2 space-y-1", className)}
			{...rest}>
			{children}
		</div>
	);
};
