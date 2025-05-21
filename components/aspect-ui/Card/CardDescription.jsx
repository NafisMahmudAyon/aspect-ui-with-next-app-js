import { cn } from "../utils/cn";

export const CardDescription = ({ children, className = "", ...rest }) => {
	return (
		<p
			className={cn(
				"text-sm text-primary-800 dark:text-primary-200",
				className
			)}
			{...rest}>
			{children}
		</p>
	);
};

