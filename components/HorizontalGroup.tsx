export default function HorizontalGroup(props: JSX.IntrinsicElements['div']) {
    return (
        <div {...props} className={`${props.className ?? ""} flex flex-row`}>
            {props.children}
        </div>
    )
}