import { cn } from "../utils/cn";

export const CardFooter = ({ children, className = "", ...rest }) => {
	return (
		<div className={cn(className)} {...rest}>
			{children}
		</div>
	);
};

