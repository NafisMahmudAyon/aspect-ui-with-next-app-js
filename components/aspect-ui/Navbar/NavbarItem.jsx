"use client";

import { cn } from "../utils/cn";

export const NavbarItem = ({ children, className = "", ...rest }) => {
	return (
		<div
			className={cn(
				"px-2 py-1 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100",
				className
			)}
			{...rest}>
			{children}
		</div>
	);
};

