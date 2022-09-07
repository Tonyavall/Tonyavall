import Layout from '../components/layouts/article'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <Layout>
            <div> 
                <p className="text-center bg-gray-600 mx-4 my-6 p-3 rounded-md">
                    Hi! I'm a web developer and compsci student in NorCal.
                </p>

                <div className='flex flex-row justify-between flex-wrap w-full px-5'>
                    <div className='flex flex-col my-6'>
                    <h2 className='text-4xl text-vs-pink font-bold'>Tony Vallescas</h2>
                    <p className='italic'>Student, Aspiring Software Engineer</p>
                    </div>
                    <div className='bg-[url("../public/assets/images/selfie.jpg")] w-32 h-32 bg-no-repeat bg-cover bg-center rounded-full'></div>
                </div>

                <div className='flex flex-col flex-wrap px-5 max-w-lg'>
                    <h3 className='text-2xl text-vs-purple font-bold'>Work</h3>
                    <p className='py-4 indent-6'>
                        I'm a <span className='text-vs-green'>full stack</span> web developer with expertise on the <span className='text-vs-green'>MERN</span> stack. 
                        I'm well versed in both <span className='text-vs-green'>frontend</span>, and <span className='text-vs-green'>backend </span> 
                        frameworks and their respective libraries such as <span className='text-vs-green'>React </span> , Nodejs, Express, NoSql, MySql,
                        Graphql, etc. My works and full breadth of knowledge can be found in my <span className='text-vs-green'>Works </span> and <span className='text-vs-green'>About </span>  page.
                    </p>
                    <Link to="/works">
                        <button 
                            className='text-md text-vs-bg h-9 w-[100px] self-center rounded-md bg-vs-teal hover:bg-white font-extrabold'
                        >
                            Works
                        </button>
                    </Link>
                </div>
            </div> 
        </Layout>
    )
}

export default Home;