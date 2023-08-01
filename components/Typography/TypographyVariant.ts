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