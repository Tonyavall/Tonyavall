export function Project({currentProject, setCurrentPage}) {
    return (
        <section className="flex flex-col w-[80vw] max-w-[34rem]">
            <div className="flex flex-row items-center justify-left mb-2">
                <h3 
                    onClick={() => setCurrentPage({name: 'Works'})}
                    className="text-vs-purple text-lg ml-4 mr-2 hover:cursor-pointer">{currentProject.type}</h3>
                <p>{'>'}</p>
                <p className="ml-2 text-2xl">{currentProject.title}</p>
            </div>

            <div 
                style={{background: `url('${currentProject.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                className="h-72 rounded-xl mx-4 my-3">
            </div>
            <p className="mx-4 my-3">{currentProject.description}</p>
        </section>
    )
}