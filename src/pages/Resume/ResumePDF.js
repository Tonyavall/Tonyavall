import { PDFViewer } from '@react-pdf/renderer';
import Resume from '../../components/Resume'

const ResumePage = () => {
    return (
        <PDFViewer className='w-full h-screen'>
            <Resume />
        </PDFViewer>
    )
}

export default ResumePage;