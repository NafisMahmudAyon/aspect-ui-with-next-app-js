"use client";

import { cn } from "../utils/cn";
import { useTabs } from "./TabsContext";

export const TabContent = ({ children, id, className = "", ...rest }) => {
	const { activeTab } = useTabs();

	if (activeTab !== id) return null;

	return (
		<div
			className={cn("text-primary-800 dark:text-primary-200 ", className)}
			{...rest}>
			{children}
		</div>
	);
};

