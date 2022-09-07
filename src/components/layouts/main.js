import { Helmet } from 'react-helmet'
import Navbar from '../navbar';
import Tavatar from '../ModelCanvas'

const Main = ({ children }) => {
    return (
        <main className='flex flex-col items-center bg-vs-bg min-h-screen h-fill text-white font-mono'>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="Portfolio" content="Tony Vallescas' porfolio website."/>
                <title>Tony Vallescas - Homepage</title>
            </Helmet>

            <Navbar/>
            <Tavatar/>

            {children}
        </main>
    )
}

export default Main;