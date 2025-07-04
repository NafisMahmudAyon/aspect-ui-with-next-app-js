"use client";

import { cn } from "../../utils/cn";

export const Sidebar = ({ children, className = "", ...rest }) => {
	return (
		<aside
			className={cn(
				"flex h-screen w-64 flex-col p-5 bg-bg transition-all duration-300 ease-in-out",
				className
			)}
			{...rest}>
			{children}
		</aside>
	);
};
