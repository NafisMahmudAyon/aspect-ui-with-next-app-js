'use client'
import { cn } from "../../utils/cn";

export const NavbarItem = ({ children, className = "", ...rest }) => {
	return (
		<button
			className={cn(
				"px-2 py-1 inline-flex text-text hover:bg-bg-light rounded-md transition-colors ease-in-out focus-visible:bg-bg-light",
				className
			)}
			{...rest}>
			{children}
		</button>
	);
};
