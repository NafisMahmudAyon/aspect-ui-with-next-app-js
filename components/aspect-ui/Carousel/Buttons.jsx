"use client";
import { forwardRef } from "react";
import { cn } from "../utils/cn";

export const CarouselButtons = forwardRef(
	({ children, className, ...rest }, ref) => {
		return (
			<div
				className={cn("flex items-center gap-2", className)}
				ref={ref}
				{...rest}>
				{children}
			</div>
		);
	}
);

CarouselButtons.displayName = "CarouselButtons";

export default CarouselButtons;

