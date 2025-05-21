"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

export const CircularProgressBar = ({
	value = 75,
	className = "",
	onVisible,
	duration = 2,
	strokeColor = "#CCCCCC",
	strokeFillColor = "#333333",
	strokeWidth = 2,
	contentClassName = "",
	hideValue = false,
	children,
	onClick,
	...rest
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [percentage, setPercentage] = useState(0);
	const svgRef = useRef(null);
	const circleRef = useRef(null);

	const durationValue = (duration * 1000) / value;

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.5,
			}
		);

		const currentRef = svgRef.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	useEffect(() => {
		if (onVisible && !isVisible) {
			setPercentage(0);
		} else if (isVisible) {
			const interval = setInterval(() => {
				setPercentage((prevPercentage) => {
					const nextPercentage = Math.min(prevPercentage + 1, value);
					if (nextPercentage >= value) {
						clearInterval(interval);
					}
					return nextPercentage;
				});
			}, durationValue);

			return () => clearInterval(interval);
		}
	}, [isVisible, onVisible, value, durationValue]);

	return (
		<div
			className={cn("relative size-24", className)}
			onClick={onClick}
			role="progressbar"
			aria-valuenow={percentage}
			aria-valuemin="0"
			aria-valuemax="100"
			{...rest}>
			<div className="absolute left-0 top-0 h-full w-full origin-center -rotate-90 transform">
				<svg
					className="absolute left-1/2 top-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2"
					viewBox="0 0 24 24"
					ref={svgRef}>
					<circle
						cx="12"
						cy="12"
						r="10"
						fill="none"
						stroke={strokeColor}
						strokeLinecap="round"
						strokeWidth={strokeWidth}
					/>
				</svg>
				<svg
					className="absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 stroke-slate-600"
					viewBox="0 0 24 24">
					<circle
						ref={circleRef}
						cx="12"
						cy="12"
						r="10"
						fill="none"
						stroke={strokeFillColor}
						strokeLinecap="round"
						strokeDasharray="62.83"
						strokeWidth={strokeWidth}
						style={{
							strokeDashoffset: `${((100 - percentage) * 62.83) / 100}`,
							transition: "stroke-dashoffset 0.1s ease-out",
						}}
					/>
				</svg>
				<span
					className={cn(
						"absolute inset-0 flex h-full w-full rotate-90 items-center justify-center text-inherit",
						contentClassName
					)}>
					{children || (!hideValue && `${percentage}%`)}
				</span>
			</div>
		</div>
	);
};

export default CircularProgressBar;

