import { cn } from "../utils/cn";

export const CardHeader = ({ children, className = "", ...rest }) => {
	return (
		<div className={cn(className)} {...rest}>
			{children}
		</div>
	);
};

