import { cn } from "../utils/cn";

export const CardTitle = ({ children, className = "", ...rest }) => {
	return (
		<h3
			className={cn(
				"text-lg font-semibold text-primary-800 dark:text-primary-200",
				className
			)}
			{...rest}>
			{children}
		</h3>
	);
};

