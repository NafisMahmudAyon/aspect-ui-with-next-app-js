"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "../../utils/cn";

function TooltipProvider({ delayDuration = 0, ...props }) {
	return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />;
}

function Tooltip({ ...props }) {
	return (
		<TooltipProvider>
			<TooltipPrimitive.Root {...props} />
		</TooltipProvider>
	);
}

function TooltipAction({ className, outline = false, ...props }) {
	return (
		<TooltipPrimitive.Trigger
			className={cn(
				"inline-flex gap-2 items-center justify-center font-medium rounded-md focus:outline-hidden focus-visible:border-ring focus-visible:ring-border transition ease-in-out duration-200 focus-visible:ring-1 cursor-pointer px-4 py-2 hover:bg-bg-light/60",
				outline && "border border-border text-text bg-bg-light/30",
				className
			)}
			{...props}
		/>
	);
}

function TooltipContent({ className, sideOffset = 0, children, ...props }) {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				sideOffset={sideOffset}
				className={cn(
					"bg-primary text-primary-foreground z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
					className
				)}
				{...props}>
				{children}
				<TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
			</TooltipPrimitive.Content>
		</TooltipPrimitive.Portal>
	);
}

export { Tooltip, TooltipAction, TooltipContent, TooltipProvider };
