export type TypographyGroupProps = React.HTMLAttributes<HTMLParagraphElement>;

/**
 * Groups Typography components, vertically
 * 
 * Use composition for horizontal grouping
 */
export default function TypographyGroup(props: TypographyGroupProps) {
	return (
		<p {...props} className={`${props.className ?? ""} flex flex-col gap-0`} />
	)
}