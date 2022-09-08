import { Helmet } from 'react-helmet'
import Navbar from '../Navbar';
import Tavatar from '../ModelCanvas'
import { useLocation } from 'react-router-dom';

const Main = ({ children }) => {
    const { pathname } = useLocation()

    return (
        <main className='flex flex-col items-center bg-vs-bg min-h-screen h-fill text-white font-mono'>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="Portfolio" content="Tony Vallescas' porfolio website."/>
                <title>Tony Vallescas - Homepage</title>
            </Helmet>

            <Navbar/>
            {pathname !== "/contact/resume" && <Tavatar/>}

            {children}
        </main>
    )
}

export default Main;