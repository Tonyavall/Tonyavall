import { Link } from "react-router-dom"

const Navbar = () => {
    const pages = [
        { name: 'works' },
        { name: 'about' },
        { name: 'contact' },
    ]

    return (
        <nav className="flex justify-center bg-[#282A36] text-vs-teal p-4 font-mono w-full">
            <div className="flex flex-wrap justify-center lg:justify-between w-2/5">
                <Link to="/">
                    <h1 className="flex mx-2 text-vs-pink font-extrabold text-xl content-center hover:cursor-pointer">
                        Tonyavall
                    </h1>
                </Link>
                <div className="flex justify-center flex-wrap">
                {
                    pages.map(page=> (
                        <Link to={`/${page.name}`} key={page.name}>
                            <button 
                                className="mx-2 hover:text-white"
                            >
                                <span className="text-white">{'<'}</span>
                                {page.name}
                                <span className="text-white">{'/>'}</span>
                            </button>
                        </Link>
                    ))
                }
                </div>
            </div>
        </nav>
    )
}

export default Navbar