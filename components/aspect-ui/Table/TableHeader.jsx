"use client";

import { cn } from "../../utils/cn";

export const TableHeader = ({ children, className = "", ...rest }) => {
	return (
		<thead
			className={cn("[&_tr]:border-b [&_tr]:border-b-border", className)}
			{...rest}>
			{children}
		</thead>
	);
};
