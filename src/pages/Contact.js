import Layout from '../components/layouts/Article'
import socials from '../lib/socials'

const Contact = () => {

    return (
        <Layout title="Contact">
            <div>
                <h3 className='text-2xl text-vs-teal ml-4 mt-4'>Socials</h3>
                <div className='flex flex-row flex-wrap justify-center items-center p-2 text-xl'>
                    {socials.map(social=> {
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
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default Contact;