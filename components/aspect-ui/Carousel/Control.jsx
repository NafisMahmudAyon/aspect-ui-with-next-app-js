"use client";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export const CarouselControl = forwardRef(
	({ children, className, ...props }, ref) => {
		return (
			<div
				{...props}
				className={cn(
					"flex items-center justify-between mt-[1.8rem] absolute top-0 left-0 w-full z-50",
					className
				)}
				ref={ref}>
				{children}
			</div>
		);
	}
);

CarouselControl.displayName = "CarouselControl";
