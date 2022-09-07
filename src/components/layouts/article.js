import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';

const Main = ({ children, title }) => {
    const helmetTitle = `Tony Vallescas - ${title}`
    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <motion.article
            className='md:w-[550px] w-[375px] bg-vs-bg'
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.8, type: 'easeInOut' }}
        >
            {title && (
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="Portfolio" content={helmetTitle}/>
                    <title>{helmetTitle}</title>
                </Helmet>
            )}

            {children}
        </motion.article>
    )
}

export default Main;