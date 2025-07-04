import { cn } from "../../utils/cn";

export const TimelineItem = ({
	children,
	position = "left",
	isMixed = false,
	icon,
	className = "",
	containerClassName = "",
	dotClassName = "",
	...rest
}) => {
	const isLeft = position === "left";

	return (
		<div
			className={cn("mb-8 flex justify-between items-center w-full", className)}
			{...rest}>
			<div
				className={cn(
					"p-4 bg-bg rounded-lg shadow-sm transition-all duration-200",
					isLeft ? "mr-auto" : "ml-auto order-1",
					isMixed ? "w-5/12" : "w-[calc(100%-2rem)]",
					containerClassName
				)}>
				{children}
			</div>

			<div
				className={cn(
					"z-10 absolute flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bg-light text-text -translate-x-1/2",
					isMixed ? "left-1/2" : isLeft ? "left-full" : "",
					dotClassName
				)}>
				{icon || <div className="h-3 w-3 rounded-full bg-text" />}
			</div>
		</div>
	);
};
