import { motion } from 'framer-motion'
import { Socials } from '../../lib/Socials'

export default function Contact({container}) {
    return (
        <motion.section 
            initial="hidden"
            animate="show"
            className="flex justify-self-start flex-col flex-wrap w-[80vw] max-w-[32rem]"
            variants={container}
            exit="exit"
            key="contactExit"
        >
            <div>
                <h3 className='text-2xl text-vs-purple'>Socials</h3>
                    <div className='flex flex-row flex-wrap justify-center items-center p-2 text-xl'>
                        {
                        Socials.map(social=> {
                            return (
                            <a 
                                href={social.link}
                                target="_blank" 
                                rel="noopener noreferrer"
                                key={social.name}
                                className='flex flex-row flex-wrap justify-center items-center p-2 text-xl mx-4'
                            >
                                {social.icon}
                                <p className='ml-2'>
                                    {social.name}
                                </p>
                            </a>
                            )
                        })
                        }
                    </div>
            </div>
        </motion.section>
    )
}