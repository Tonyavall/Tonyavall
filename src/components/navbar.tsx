import { Link, useLocation } from "react-router-dom"
import Burger from "./burger"

const Navbar = () => {
    const { pathname } = useLocation()
    const currentLocation = pathname.split('/')[1]

    const pages = [
        { name: 'works' },
        // { name: 'about' },
        { name: 'contact' },
    ]

    return (
        <nav className="flex justify-between items-center bg-[#282A36] text-vs-teal px-4 font-mono w-full md:w-[750px] h-14">
            <Link to="/">
                <h1 className="md:flex mx-2 text-vs-pink font-extrabold text-xl content-center hover:cursor-pointer hidden">
                    tonyavall
                </h1>
                <div className='md:hidden bg-selfie w-[2.5rem] h-[2.5rem] bg-no-repeat bg-contain bg-center rounded-full border-[2px] border-[#1F2937] border-b-vs-pink border-l-vs-pink'></div>
            </Link>
            <div className="md:flex justify-center items-center flex-wrap hidden h-full">
            {
                pages.map(({name})=> (
                    <Link to={`/${name}`} key={name}>
                        <button
                            className={`hover:text-vs-green w-[110px] h-8 capitalize ${name === currentLocation ? 'text-vs-green' : 'text-vs-teal'}`}
                            data-id={name}
                        >
                            <span className="text-white">{name === currentLocation ? '< ' : '<'}</span>
                            {name}
                            <span className="text-white">{name === currentLocation ? ' />' : '/>'}</span>
                        </button>
                    </Link>
                ))
            }
            </div>

            <Burger currentLocation={currentLocation} pages={pages}/>
        </nav>
    )
}

export default Navbar