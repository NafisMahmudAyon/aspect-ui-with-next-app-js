"use client";
import { cn } from "../utils/cn";

export const Skeleton = ({
	variation = "text",
	width,
	height,
	className = "",
	...rest
}) => {
	const getVariationStyle = () => {
		switch (variation) {
			case "circular":
				return "rounded-full";
			case "rectangular":
				return "rounded-none";
			case "rounded-sm":
				return "rounded-md";
			case "text":
			default:
				return "rounded-sm";
		}
	};

	return (
		<div
			className={cn(
				"animate-pulse bg-primary-200 dark:bg-primary-800",
				getVariationStyle(),
				className
			)}
			style={{
				width: width || "100%",
				height: height || (variation === "text" ? "1em" : "100%"),
			}}
			{...rest}></div>
	);
};

