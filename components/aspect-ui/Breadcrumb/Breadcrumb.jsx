"use client";
import React, { Children } from "react";
import { Right } from "../Icon/Arrow";
import { cn } from "../utils/cn";

export const Breadcrumb = ({
	children,
	className = "",
	separator = <Right />,
	separatorClassName = "",
	...rest
}) => {
	// Safely convert children to an array
	const childrenArray = Children.toArray(children);

	return (
		<ul
			className={cn(
				"flex max-w-max items-center gap-3 px-3.5 py-2.5 text-primary-800 dark:text-primary-100",
				className
			)}
			{...rest}>
			{childrenArray.map((child, index) => (
				<React.Fragment key={index}>
					{child}
					{index < childrenArray.length - 1 && (
						<span className={cn("mx-2 text-primary-500", separatorClassName)}>
							{separator}
						</span>
					)}
				</React.Fragment>
			))}
		</ul>
	);
};

Breadcrumb.displayName = "Breadcrumb";

