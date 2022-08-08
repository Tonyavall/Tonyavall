export function Project({currentProject}) {
    return (
        <section className="flex flex-col">
            <div className="flex flex-row items-center justify-left">
                <h3 className="text-vs-purple mr-2">{currentProject.type}</h3>
                <p>{'>'}</p>
                <p className="ml-2 text-lg">{currentProject.title}</p>
            </div>

            
        </section>
    )
}