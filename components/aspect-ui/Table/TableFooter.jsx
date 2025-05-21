"use client";

export const TableFooter = ({ children, className = "", ...rest }) => {
	return (
		<tfoot
			className={`border-t  font-medium last:[&>tr]:border-b-0 ${className}`}
			{...rest}>
			{children}
		</tfoot>
	);
};

