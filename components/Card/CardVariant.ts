import { tv } from "tailwind-variants";

export const CardVariant = tv({
    variants: {
        radius: {
            xs: "rounded-xs",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            full: "rounded-full",
        },
        shadow: {
            xs: "shadow-xs dark:shadow-none",
            sm: "shadow-sm dark:shadow-none",
            md: "shadow-md dark:shadow-none",
            lg: "shadow-lg dark:shadow-none",
            xl: "shadow-xl dark:shadow-none",
            "2xl": "shadow-2xl dark:shadow-none",
            inner: "shadow-inner dark:shadow-none",
            none: "shadow-none",
        },
        border: {
            true: "border border-black border-opacity-10 dark:border-opacity-10 dark:border-white",
            false: "border-0",
        }
    },
    defaultVariants: {
        radius: "md",
        shadow: "md",
        border: true,
    }
});