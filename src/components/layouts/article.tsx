interface Props {
    children?: React.ReactNode | React.ReactNode[]
    title?: string
}

const Main: React.FC<Props> = ({ children, title }) => {
    const helmetTitle = `Tony Vallescas - ${title}`

    return (
        <>
        {title && (
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="Portfolio" content={helmetTitle}/>
                    <title>{helmetTitle}</title>
                </head>
            )}

            {children}
        </>
    )
}

export default Main;