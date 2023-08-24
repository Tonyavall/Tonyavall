import Layout from '../components/layouts/article'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    return (
        <Layout>
            <p className="text-center bg-[#1F2937] mx-4 mt-6 p-3">
                Hi! I'm a programmer and compsci student in northern California 👋
            </p>

            <div className='h-[3px] min-w-[170px] w-[14vw] bg-vs-pink mb-6 mx-4'></div>

            <div className='flex flex-row justify-center sm:justify-between flex-wrap w-full px-5'>
                <div className='flex flex-col my-6'>
                <h2 className='text-4xl font-bold'>Tony Vallescas</h2>
                <p>👽 Programmer 👽</p>
                </div>
                <div className='bg-selfie w-32 h-32 bg-no-repeat bg-contain bg-center rounded-full border-[3px] border-[#1F2937] border-b-vs-pink border-l-vs-pink'></div>
            </div>

            <div className='flex flex-col flex-wrap px-5 max-w-lg mb-10'>
                <h3 className='text-2xl text-vs-white font-bold'>Work</h3>
                <p className='py-4 indent-6'>
                    I'm a <span className='text-vs-purple'>Full Stack Web Developer</span> who's work is primarily in <span className='text-blue-400'>TypeScript</span>. However,
                    you can also find me dabbling in some C++, Python, and Java for school, and the occasional C and x86 Assembly (only if I'm held at gunpoint). As a developer
                    who regularly interfaces with Nodejs, I'm intimately familar with it's ecosystem. My public contributions and projects can be found on my Works page.
                </p>
                    <div className="flex flex-row justify-between items-center mt-4">
                        <Link to="/works">
                            <div className="flex flex-col">
                                <button 
                                    className='text-md text-white h-8 w-[100px] bg-[#1F2937] hover:bg-white hover:text-vs-bg font-bold'
                                >
                                    Works
                                </button>
                                <div className='h-[3px] w-[50px] bg-vs-pink'></div>
                            </div>
                        </Link>
                        {/* <Link to="/about">
                            <div className="flex flex-col">
                                <button 
                                    className='text-md text-white h-8 w-[100px] bg-[#1F2937] hover:bg-white hover:text-vs-bg font-bold'
                                >
                                    About
                                </button>
                                <div className='h-[3px] w-[50px] bg-vs-pink self-end'></div>
                            </div>
                        </Link> */}
                    </div>
            </div>
        </Layout>
    )
}

export default Home;