import { motion } from 'framer-motion'

// frontend
import { TbBrandTailwind } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { SiJquery } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { SiHandlebarsdotjs } from 'react-icons/si'

// backend
import { SiMysql } from 'react-icons/si'
import { SiSequelize } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'

// dev tools
import { SiInsomnia } from 'react-icons/si'
import { AiFillSlackCircle } from 'react-icons/ai'
import { DiVisualstudio } from 'react-icons/di'

export default function About({container}) {
    const frontend = [
        'React',
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'NEXTjs',
        'Tailwind',
        'Bootstrap',
        'Jquery',
        'Handlebars',
        'Threejs',
        'ChakraUI'
    ]
    const backend = [
        'Nosql',
        'MongoDB',
        'Mongoose',
        'Mysql2',
        'Sequelize',
        'Nodejs',
        'AWS S3'
    ]
    const dev = [
        'Slack',
        'Insomnia',
        'VScode'
    ]

    return (
        <motion.section 
            initial="hidden"
            animate="show"
            className="flex justify-self-start flex-col flex-wrap w-[80vw] max-w-[32rem]"
            variants={container}
            exit="exit"
            key="aboutExit"
        >
            <div>
                <h4 className='text-2xl text-vs-purple'>About</h4>
                <div className="flex flex-col flex-wrap justify-center items-center p-2">
                    <p className="py-4 indent-6">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>
                    
                    <p className="text-lg text-vs-green">Frontend</p>
                    <div className="flex flex-row flex-wrap justify-center items-center w-full h-96 bg-gray-600 rounded-2xl my-4">
                        <FaReact className='text-7xl m-4'/>
                        <AiFillHtml5 className='text-7xl m-4'/>
                        <SiCss3 className='text-7xl m-4'/>
                        <SiJavascript className='text-7xl m-4'/>
                        <SiJquery className='text-7xl m-4'/>
                        <TbBrandTailwind className='text-7xl m-4'/>
                        <FaBootstrap className='text-7xl m-4'/>
                        <SiHandlebarsdotjs className='text-7xl m-4'/>
                    </div>
                    <ul className='flex flex-row flex-wrap justify-center items-center p-4 w-full'>
                        {
                        frontend.map(framework => {
                            return (
                                <li key={framework} className='p-2'>{framework}</li>
                            )
                        })
                        }
                    </ul>

                    <p className="text-lg text-vs-green">Backend</p>
                    <div className="flex flex-row flex-wrap justify-center items-center w-full h-96 bg-gray-600 rounded-2xl my-4">
                        <SiMysql className='text-7xl m-4'/>
                        <SiSequelize className='text-7xl m-4'/>
                        <SiMongodb className='text-7xl m-4'/>
                        <DiNodejs className='text-7xl m-4'/>
                    </div>
                    <ul className='flex flex-row flex-wrap justify-center items-center p-4 w-full'>
                        {
                        backend.map(framework => {
                            return (
                                <li key={framework} className='p-2'>{framework}</li>
                            )
                        })
                        }
                    </ul> 

                    <p className="text-lg text-vs-green">Dev Tools</p>
                    <div className="flex flex-row flex-wrap justify-center items-center w-full h-96 bg-gray-600 rounded-2xl my-4">
                        <SiInsomnia className='text-7xl m-4'/>
                        <AiFillSlackCircle className='text-7xl m-4'/>
                        <DiVisualstudio className='text-7xl m-4'/>
                    </div>
                    <ul className='flex flex-row flex-wrap justify-center items-center p-4 w-full'>
                        {
                        dev.map(framework => {
                            return (
                                <li key={framework} className='p-2'>{framework}</li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}