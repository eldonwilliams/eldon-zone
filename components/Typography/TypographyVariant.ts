import { tv } from "tailwind-variants";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin-ext"],
});

/**
 * Typography tailwind variants -
 * Reusable styling for typography
 */
const TypographyVariant = tv({
	base: "max-w-max",
	variants: {
		color: {
			primary: "text-black dark:text-white",
			secondary: "text-gray-600 dark:text-gray-400",
			error: "text-rose-600 dark:text-rose-500",
			success: "text-green-500",
			warning: "text-yellow-500 dark:text-amber-500",
			info: "text-blue-500 dark:text-blue-400",
		},
		font: {
			roboto: roboto.className,
			mono: "font-mono",
			sans: "font-sans",
			serif: "font-serif",
		},
		weight: {
			thin: "font-thin",
			extralight: "font-extralight",
			light: "font-light",
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
			extrabold: "font-extrabold",
			black: "font-black",
		},
		interactive: {
			true: "hover:cursor-pointer",
			normal: "hover:cursor-default",
		},
		size: {
			xs: "text-xs",
			sm: "text-sm",
			base: "text-base",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl",
			"3xl": "text-3xl",
			"4xl": "text-4xl",
			"5xl": "text-5xl",
			"6xl": "text-6xl",
			"7xl": "text-7xl",
			"8xl": "text-8xl",
		},
		bold: {
			true: "font-bold",
			// Use the normal to reset
			normal: "font-normal",
		},
		italic: {
			true: "italic",
			normal: "not-italic",
		},
		underline: {
			true: "underline",
			normal: "no-underline",
		},
		highlight: {
			true: "pl-1 pr-1 bg-yellow-200 dark:bg-yellow-600",
			normal: "pl-0 pr-0 bg-transparent",
		},
		noselect: {
			true: "select-none",
			normal: "select-text",
		},
		block: {
			true: "block",
		}
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
		block: false,
		font: "roboto",
	}
});

export default TypographyVariant;