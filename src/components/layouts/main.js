import { Helmet } from 'react-helmet'
import Navbar from '../navbar';
import Tavatar from './components/ModelCanvas'

const Main = ({ children }) => {
    return (
        <main className='flex flex-col items-center bg-vs-bg min-h-screen h-fill text-white p-3 font-mono'>
            <Helmet>
                <title>Tonyavall</title>

                <meta name="Portfolio" content="Tony's porfolio website."/>
            </Helmet>

            <Navbar/>
            <Tavatar/>

            {children}
        </main>

    )
}

export default Main;