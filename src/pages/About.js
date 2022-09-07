import Layout from '../components/layouts/article'
import techStack from '../lib/techStack'

const About = () => {

    return (
        <Layout title="About">
            <div>
                <h4 className='text-2xl text-vs-purple'>About</h4>
                <div className="flex flex-col flex-wrap justify-center items-center p-2">
                    <p className="py-4 indent-6">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>
                    
                    <p className="text-lg text-vs-green">Frontend</p>
                    <div className="flex flex-row flex-wrap justify-center items-center w-full h-96 bg-gray-600 rounded-2xl my-4">
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
                    <div className="flex flex-row flex-wrap justify-center items-center w-full h-96 bg-gray-600 rounded-2xl my-4">
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
                    <div className="flex flex-row flex-wrap justify-center items-center w-full h-96 bg-gray-600 rounded-2xl my-4">
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