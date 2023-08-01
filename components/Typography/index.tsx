import React from "react";
import { TypographyProps } from "./TypographyProps";
import TypographyVariant from "./TypographyVariant";

/**
 * Typography - A component to display text
 */
export default function Typography(props: TypographyProps) {
	const { children, twemoji, color, interactive, bold, italic, underline, highlight, noselect, ...componentProps } = props;
	const styleProps = { color, interactive, bold, italic, underline, highlight, noselect };
	const isTextTypography = typeof children === "string";
	
	return (
		React.createElement(
			isTextTypography ? "p" : "span", // If the children is a string, use a paragraph tag, otherwise use a span tag
			{ ...componentProps, className: `${componentProps.className ?? ""} ${TypographyVariant(styleProps)}`, }, // Spread the component props and add the TypographyVariant class
			children
		)
	);
}