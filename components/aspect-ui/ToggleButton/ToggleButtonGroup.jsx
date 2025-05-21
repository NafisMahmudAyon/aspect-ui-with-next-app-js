"use client";

import { cn } from "../utils/cn";
import { ToggleButtonGroupProvider } from "./ToggleButtonGroupContext";

export const ToggleButtonGroup = ({
	children,
	type,
	defaultValue,
	onChange,
	className = "",
	outline = false,
	disabled = false,
	...rest
}) => {
	return (
		<ToggleButtonGroupProvider
			type={type}
			defaultValue={defaultValue}
			onChange={onChange}
			outline={outline}
			disabled={disabled}>
			<div className={cn("flex space-x-2", className)} {...rest}>
				{children}
			</div>
		</ToggleButtonGroupProvider>
	);
};

