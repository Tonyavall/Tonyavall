import { motion } from 'framer-motion'

export default function About({item, container}) {
    return (
        <motion.section 
            initial="hidden"
            animate="show"
            className="flex justify-self-start flex-col flex-wrap w-[80vw] max-w-[32rem]"
            variants={container}
        >
            <motion.div variants={item}>
                <h4 className='text-2xl text-vs-purple'>About</h4>
                <div className="flex flex-col flex-wrap justify-center items-center p-2">
                    <p className="py-4 indent-6">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>
                    
                    <p className="text-lg text-vs-green">Frontend</p>
                    <div className="w-full h-96 bg-gray-600 rounded-2xl my-4">

                    </div>

                    <p className="text-lg text-vs-green">Backend</p>
                    <div className="w-full h-96 bg-gray-600 rounded-2xl my-4">

                    </div>

                    <p className="text-lg text-vs-green">Dev Tools</p>
                    <div className="w-full h-96 bg-gray-600 rounded-2xl my-4">

                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}