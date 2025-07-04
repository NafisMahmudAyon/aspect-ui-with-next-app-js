"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../../utils/cn";

function Popover({ ...props }) {
	return <PopoverPrimitive.Root {...props} />;
}

function PopoverAction({ className, outline = false, ...props }) {
	return (
		<PopoverPrimitive.Trigger
			className={cn(
				"inline-flex gap-2 items-center justify-center font-medium rounded-md focus:outline-hidden focus-visible:border-ring focus-visible:ring-border transition ease-in-out duration-200 focus-visible:ring-1 cursor-pointer px-4 py-2 hover:bg-bg-light/60",
				outline && "border border-border text-text bg-bg-light/30",
				className
			)}
			{...props}
		/>
	);
}

function PopoverContent({
	className,
	align = "center",
	sideOffset = 4,
	...props
}) {
	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				align={align}
				sideOffset={sideOffset}
				className={cn(
					"bg-bg z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border border-border p-4 shadow-md outline-hidden",
					className
				)}
				{...props}
			/>
		</PopoverPrimitive.Portal>
	);
}

function PopoverAnchor({ ...props }) {
	return <PopoverPrimitive.Anchor {...props} />;
}

export { Popover, PopoverAction, PopoverAnchor, PopoverContent };
