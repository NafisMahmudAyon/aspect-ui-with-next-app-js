import { cn } from "../utils/cn";

export const CardContent = ({ children, className = "", ...rest }) => {
	return (
		<div className={cn("py-4", className)} {...rest}>
			{children}
		</div>
	);
};

