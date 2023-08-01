import { VariantProps } from "tailwind-variants";
import TypographyVariant from "./TypographyVariant";

export type TypographyStyle =  VariantProps<typeof TypographyVariant>;

/**
 * Props for a Typography Component that is used as a text
 */
export type TextTypographyProps = {
	children?: string;
} & TypographyStyle & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * Props for Typography components that are used in a group
 * 
 * TypographyStyle is applied to every child
 */
export type GroupTypographyProps = {
	children?: React.ReactElement | React.ReactElement[];
} & TypographyStyle & React.HTMLAttributes<HTMLSpanElement>;

/**
 * Props for the Typography component
 */
export type TypographyProps = (TextTypographyProps | GroupTypographyProps) & {
	/**
	 * If true, twemoji will be used to render emojis.
	 * 
	 * Set to false for slight performance boost on fields with no emojis.
	 * 
	 * @default true
	 * @see https://www.npmjs.com/package/react-twemoji
	 */
	twemoji?: boolean;
};
