import Layout from '../components/layouts/article'
import techStack from '../lib/tech_stack'
import { Link } from 'react-router-dom'

const About = () => {

    return (
        <Layout title="About">
            <div>
                <h4 className='text-2xl text-vs-teal ml-4 mt-4'>About</h4>
                <div className="flex flex-col flex-wrap justify-center items-center p-4">
                    <p className="pt-4 pb-2 indent-6">
                        These are the languages, libraries, and overall technologies I've worked with since becoming a full stack web developer.
                        From the <span className='text-vs-purple'>frontend fundamentals</span>- HTML/CSS/JavaScript, to the <span className='text-vs-purple'>backend architecture</span>- Express/MySQL/NoSQL/ORMS/Node, and, finally, everything 
                        <span className='text-vs-purple'> between</span>- APIs/Express/Graphql. 
                    </p>
                    <p className="pb-4 indent-6">
                        My most recent work involves    serverside rendering with NEXT, React, and AWS S3 in TypeScript, which
                        can be found <Link to='/works/Fitter' className='text-vs-green'>here.</Link> I'm currently adept in the <span className='text-vs-purple'>MERN</span> stack, however, I plan
                        on branching out to Vue, Angular and the LAMP stack, which includes PHP.
                    </p>
                    
                    <p className="text-lg text-vs-green">Frontend</p>
                    <div className="flex flex-row flex-wrap justify-center items-center w-full h-96 bg-[#1F2937] rounded-2xl my-4">
                        {techStack.frontend.map(({name, ReactIcon}) => {
                            if (ReactIcon === null) return null
                            return (
                                <ReactIcon key={name} className='text-7xl m-4'/>
                            )
                        })}
                    </div>
                    <ul className='flex flex-row flex-wrap justify-center items-center p-4 w-full'>
                        {techStack.frontend.map(({name}) => {
                            return (
                                <li key={name+1} className='p-2'>{name}</li>
                            )
                        })}
                    </ul>

                    <p className="text-lg text-vs-green">Backend</p>
                    <div className="flex flex-row flex-wrap justify-center items-center w-full h-96 bg-[#1F2937] rounded-2xl my-4">
                        {techStack.backend.map(({name, ReactIcon}) => {
                            if (ReactIcon === null) return null
                            return (
                                <ReactIcon key={name} className='text-7xl m-4'/>
                            )
                        })}
                    </div>
                    <ul className='flex flex-row flex-wrap justify-center items-center p-4 w-full'>
                        {techStack.backend.map(({name}) => {
                            return (
                                <li key={name+1} className='p-2'>{name}</li>
                            )
                        })}
                    </ul> 

                    <p className="text-lg text-vs-green">Dev Tools</p>
                    <div className="flex flex-row flex-wrap justify-center items-center w-full h-96 bg-[#1F2937] rounded-2xl my-4">
                        {techStack.devTools.map(({name, ReactIcon}) => {
                            if (ReactIcon === null) return null
                            return (
                                <ReactIcon key={name} className='text-7xl m-4'/>
                            )
                        })}
                    </div>
                    <ul className='flex flex-row flex-wrap justify-center items-center p-4 w-full'>
                        {techStack.devTools.map(({name}) => {
                            return (
                                <li key={name+1} className='p-2'>{name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default About;