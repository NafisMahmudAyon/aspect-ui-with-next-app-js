"use client";
import { cn } from "../utils/cn";
import { NavbarProvider } from "./NavbarContext";

export const Navbar = ({
	children,
	className = "",
	collapseBreakpoint = "md",
	...rest
}) => {
	return (
		<NavbarProvider collapseBreakpoint={collapseBreakpoint}>
			<nav
				className={cn(
					"relative bg-primary-100 dark:bg-primary-900 shadow-md",
					className
				)}
				{...rest}>
				{children}
			</nav>
		</NavbarProvider>
	);
};

