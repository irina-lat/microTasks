type HeaderType = {
    titleForBody: string
}

export const Body = (props: HeaderType) => {
    return (
        <div>
            {props.titleForBody}
            <p>Lorem Lorem Lorem Lorem Lorem</p>
        </div>
    )
}