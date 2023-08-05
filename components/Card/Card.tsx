import { VariantProps } from "tailwind-variants";
import { CardVariant } from "./CardVariant";
import React from "react";

export type CardProps = VariantProps<typeof CardVariant> & React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Use a custom element for this component.
     * Defaults to `div`.
     */
    element?: keyof JSX.IntrinsicElements;

    [key: string]: any;
};

/**
 * Adds a nice border, shadow, and backdrop blur to the element.
 */
export default function Card(props: CardProps) {
    return React.createElement(props.element ?? "div", {
        // Its probably not the *best* idea, but putting the entire props into CardVariant should work. 
        className: `${props.className ?? ""} ${CardVariant(props as VariantProps<typeof CardVariant>)}`,
    }, props.children);
}