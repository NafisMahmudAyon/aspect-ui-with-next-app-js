import { cn } from "../../utils/cn";

export const DropdownList = ({ children, className = "", ...rest }) => {
	return (
		<div
			className={cn("py-1 border-b last:border-b-0 border-border", className)}
			{...rest}>
			{children}
		</div>
	);
};
