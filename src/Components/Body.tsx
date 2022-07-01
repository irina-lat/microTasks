type HeaderType = {
    titleForBody: string
}

export const Body = (props: HeaderType) => {
    return (
        <div>{props.titleForBody}</div>
    )
}