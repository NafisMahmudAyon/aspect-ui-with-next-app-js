"use client";

export const Checkbox = ({
	label,
	checked,
	checkboxClassName = "",
	onChange,
	disabled = false,
	// variant = 'default',
	className = "",
	...rest
}) => {
	const handleChange = (event) => {
		onChange?.(event.target.checked);
	};

	return (
		<label
			className={`flex gap-2 cursor-pointer items-center ${
				disabled ? "cursor-not-allowed opacity-50" : ""
			} ${className}`}>
			<input
				type="checkbox"
				checked={checked}
				onChange={handleChange}
				disabled={disabled}
				className=""
				{...rest}
			/>
			<span className="">{label}</span>
		</label>
	);
};

