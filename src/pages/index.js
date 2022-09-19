import Layout from '../components/layouts/Article'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <Layout>
            <p className="text-center bg-[#1F2937] mx-4 mt-6 p-3">
                Hi! I'm a web developer and compsci student in NorCal.
            </p>
            
            <div className='h-1 min-w-[170px] w-[14vw] bg-vs-pink mb-6 mx-4'></div>

            <div className='flex flex-row justify-center sm:justify-between flex-wrap w-full px-5'>
                <div className='flex flex-col my-6'>
                <h2 className='text-4xl text-vs-pink font-bold'>Tony Vallescas</h2>
                <p className='italic'>Student, Aspiring Software Engineer</p>
                </div>
                <div className='bg-[url("../public/assets/images/selfie.jpg")] w-32 h-32 bg-no-repeat bg-contain bg-center rounded-full border-[5px] border-[#1F2937] border-b-vs-pink border-l-vs-pink'></div>
            </div>

            <div className='flex flex-col flex-wrap px-5 max-w-lg mb-10'>
                <h3 className='text-2xl text-vs-white font-bold'>Work</h3>
                <p className='py-4 indent-6'>
                    I'm a <span className='text-vs-purple'>full stack</span> web developer with expertise on the <span className='text-vs-purple tracking-wider italic'>MERN</span> stack. 
                    I'm well versed in both <span className='text-vs-purple'>frontend</span>, and <span className='text-vs-purple'>backend </span> 
                    frameworks and their respective libraries such as <span className='text-vs-purple'>React</span>, Nodejs, Express, NoSql, MySql,
                    Graphql, etc. My works and full breadth of knowledge can be found in my <span className='text-vs-purple'>Works </span> and <span className='text-vs-purple'>About </span>  page.
                </p>
                    <div className="flex flex-row justify-between items-center mt-4">
                        <Link to="/works">
                            <div className="flex flex-col">
                                <button 
                                    className='text-md text-white h-8 w-[100px] bg-[#1F2937] hover:bg-white hover:text-vs-bg font-bold'
                                >
                                    Works
                                </button>
                                <div className='h-1 w-[50px] bg-vs-pink'></div>
                            </div>
                        </Link>
                        <Link to="/about">
                            <div className="flex flex-col">
                                <button 
                                    className='text-md text-white h-8 w-[100px] bg-[#1F2937] hover:bg-white hover:text-vs-bg font-bold'
                                >
                                    About
                                </button>
                                <div className='h-1 w-[50px] bg-vs-pink self-end'></div>
                            </div>
                        </Link>
                    </div>
            </div>
        </Layout>
    )
}

export default Home;