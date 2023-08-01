import { tv } from "tailwind-variants";

/**
 * Typography tailwind variants -
 * Reusable styling for typography
 */
const TypographyVariant = tv({
	base: "max-w-min",
	variants: {
		color: {
			primary: "text-black dark:text-white",
			secondary: "text-gray-600 dark:text-gray-400",
			error: "text-rose-600 dark:text-rose-500",
			success: "text-green-500",
			warning: "text-yellow-500 dark:text-amber-500",
			info: "text-blue-500 dark:text-blue-400",
		},
		interactive: {
			true: "hover:cursor-pointer",
		},
		bold: {
			true: "font-bold",
		},
		italic: {
			true: "italic",
		},
		underline: {
			true: "underline",
		},
		highlight: {
			true: "pl-1 pr-1 bg-yellow-200 dark:bg-yellow-600",
		},
		noselect: {
			true: "select-none",
		},
	},
	compoundVariants: [
		// If interactive, handle color
		{
			interactive: true,
			color: "primary",
			class: "hover:opacity-80 dark:hover:brightness-120",
		},
		{
			interactive: true,
			color: "secondary",
			class: "hover:brightness-75 dark:hover:brightness-120",
		},
		{
			interactive: true,
			color: "error",
			class: "hover:brightness-75 dark:hover:brightness-120",
		},
		{
			interactive: true,
			color: "success",
			class: "hover:brightness-75 dark:hover:brightness-120",
		},
		{
			interactive: true,
			color: "warning",
			class: "hover:brightness-75 dark:hover:brightness-120",
		},
		{
			interactive: true,
			color: "info",
			class: "hover:brightness-75 dark:hover:brightness-110",
		}
	],
	defaultVariants: {
		color: "primary",
		interactive: false,
		bold: false,
		italic: false,
		underline: false,
		highlight: false,
		noselect: false,
	}
});

export default TypographyVariant;