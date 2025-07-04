"use client";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export const CarouselSlides = forwardRef(
	({ children, className, ...props }, ref) => {
		return (
			<div {...props} className={cn("flex -ml-4", className)} ref={ref}>
				{children}
			</div>
		);
	}
);

CarouselSlides.displayName = "CarouselSlides";
