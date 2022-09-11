import socials from '../../lib/socials'
import { Link } from 'react-router-dom'
import collaborations from '../../lib/collaborations'
import works from '../../lib/works'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

const ResumePage = () => {
    const projects = collaborations.concat(works)

    return (
        <div
            className="flex flex-row min-w-[55vw] h-screen bg-white text-black flex-wrap font-sans justify-center md:justify-left "
        >
            <div
                className="flex flex-col justify-center h-[250px] w-[350px]"
            >
                <div className="flex flex-row justify-center items-center mb-2 w-fit">
                    <div className='bg-[url("../public/assets/images/selfie.jpg")] w-14 h-14 bg-no-repeat bg-contain bg-center rounded-full border-[2.5px] border-[#1F2937] border-b-vs-pink border-l-vs-pink mr-4'/>
                    <h1 className="text-2xl font-medium">
                        Tony Vallescas
                    </h1>
                </div>

                <div className="pl-1">
                    <p className="text-md">Web Developer</p>
                    <p className="text-sm">tonyavallescas@gmail.com</p>
                    <p className="text-sm">Elk Grove, Sacramento, Remote</p>
                    <p className="text-sm">California, CA</p>
                </div>

                <div className='flex flex-row flex-wrap justify-center items-center text-xl w-fit mt-2'>
                    {socials.map(({link, name, icon, relative = false, email = false})=> {
                        if (name === 'Resume') return null
                        return (
                            relative ? 
                            <Link
                                to={link}
                                className='flex flex-row flex-wrap justify-center items-center mr-3 text-[1.1rem] mx-1 hover:text-vs-pink text-vs-dblue'
                                key={name}
                            >
                                {icon}
                            </Link>
                            :
                            <a 
                                href={email ? `mailto: ${link}` : link}
                                target="_blank" 
                                rel="noopener noreferrer"
                                key={name}
                                className='flex flex-row flex-wrap justify-center items-center mr-3 text-[1.1rem] mx-1 hover:text-vs-pink text-vs-dblue'
                            >
                                {icon}
                            </a>
                        )
                    })}
                </div>
            </div>

            <div className="flex flex-col flex-wrap max-w-[800px] px-6 pt-12">
                <div className='flex flex-col mb-3'>
                    <div className='mb-3'>
                        <div className='flex justify-left items-center h-[35px] w-[100px] bg-vs-dblue'>
                            <h2 className='ml-2 text-white font-lg'>About</h2>
                        </div>
                        <div className='h-1 w-[75px] bg-vs-pink self-end'></div>
                    </div>

                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed risus pretium quam vulputate. Id semper risus in hendrerit gravida rutrum quisque. Cursus in hac habitasse platea dictumst quisque sagittis purus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Eget velit aliquet sagittis id consectetur purus ut. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Turpis cursus in hac habitasse platea dictumst. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Consequat semper viverra nam libero. Neque aliquam vestibulum morbi blandit. A diam maecenas sed enim ut sem viverra. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                    </p>
                </div>

                <div className='flex flex-col mb-3'>
                    <div className='mb-3'>
                        <div className='flex justify-left items-center h-[35px] w-[100px] bg-vs-dblue'>
                            <h2 className='ml-2 text-white font-lg'>Projects</h2>
                        </div>
                        <div className='h-1 w-[75px] bg-vs-pink self-end'></div>
                    </div>

                    <div className='flex flex-wrap justify-between items-center w-full'>
                        {projects?.map(({title, description, website, github}) => (
                            <div className='flex flex-col w-[350px] mb-4'>
                                <div className='flex flex-row justify-left items-center'>
                                    <h3 className='mr-2 font-medium'>{title}</h3>
                                    <a 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        href={github}
                                    >
                                        <AiFillGithub className='text-[1.1rem] hover:text-vs-pink text-vs-dblue mr-1'/>
                                    </a>
                                    <a 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        href={website}
                                    >
                                        <FiExternalLink  className='text-[1.1rem] hover:text-vs-pink text-vs-dblue'/>
                                    </a>
                                </div>

                                <p className='text-gray-500 text-sm'>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumePage;