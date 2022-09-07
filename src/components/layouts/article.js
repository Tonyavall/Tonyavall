import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion';

const Main = ({ children, title }) => {
    const helmetTitle = `Tony Vallescas - ${title}`

    return (
        <motion.article
            className='w-[575px] mb-20'
        >
            {title && (
                <Helmet>
                    <title>{helmetTitle}</title>
                    <meta name="Portfolio" content={helmetTitle}/>
                </Helmet>
            )}

            {children}
        </motion.article>
    )
}

export default Main;