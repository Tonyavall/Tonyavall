import { motion } from 'framer-motion'

export default function Contact({container, item}) {
    return (
        <motion.section 
            initial="hidden"
            animate="show"
            className="flex justify-self-start flex-col flex-wrap w-[80vw] max-w-[32rem]"
            variants={container}
        >
            <motion.div variants={item}>
                <h5 className='text-2xl text-vs-purple'>Socials</h5>
            </motion.div>
        </motion.section>
    )
}