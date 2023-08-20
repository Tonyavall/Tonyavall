import Navbar from '../navbar';
import Tavatar from '../model_canvas'
import { useLocation } from 'react-router-dom';

interface Props {
    children: React.ReactNode | React.ReactNode[]
}

const Main: React.FC<Props> = ({ children }) => {
    const { pathname } = useLocation()
    const noFormatRoutes = [
        '/contact/resume',
        '/contact/resume.pdf'
    ]
    // returns true if the pathname is any one of the routes that
    // should have custom styling else return false
    const isNoFormatRoute = () => {
        for (let i = 0; i < noFormatRoutes.length; i++) {
            if (pathname === noFormatRoutes[i]) return true
        }
        return false
    }

    return (
        <main className={`flex flex-col items-center ${isNoFormatRoute() ? 'bg-white' : 'bg-vs-bg'} min-h-screen h-fill text-white font-mono`}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="Portfolio" content="Tony Vallescas' porfolio website."/>
                <title>Tony Vallescas - Homepage</title>
            </head>

            {!isNoFormatRoute() && <Navbar/>}
            {!isNoFormatRoute() && <Tavatar/>}

            {children}
        </main>
    )
}

export default Main;