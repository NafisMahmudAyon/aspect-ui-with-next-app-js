import { cn } from "../../utils/cn";

export const Typography = ({
	variant = "",
	tagName = "p",
	children,
	className = "",
	...rest
}) => {
	const TagName = tagName;
	const getStyles = () => {
		switch (variant) {
			case "h1":
				return "text-h1";
			case "h2":
				return "text-h2";
			case "h3":
				return "text-h3";
			case "h4":
				return "text-h4";
			case "h5":
				return "text-h5";
			case "h6":
				return "text-h6";
			case "body1":
				return "text-body1";
			case "body2":
				return "text-body2";
			case "caption":
				return "text-caption";
			case "display1":
				return "text-display1";
			case "display2":
				return "text-display2";
			default:
				return "";
		}
	};

	const styles = getStyles();

	return (
		<TagName
			className={cn(
				"text-primary-800 dark:text-primary-200",
				styles,
				className
			)}
			{...rest}>
			{children}
		</TagName>
	);
};
