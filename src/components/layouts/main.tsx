import Navbar from '../navbar';
import Tavatar from '../model_canvas'

interface Props {
    children: React.ReactNode | React.ReactNode[]
}

const Main: React.FC<Props> = ({ children }) => {

    return (
        <main
            className="flex flex-col items-center bg-vs-bg min-h-screen h-fill text-white font-mono"
        >
            <Navbar/>
            <Tavatar/>

            {children}
        </main>
    )
}

export default Main;