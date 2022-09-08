import { PDFViewer } from '@react-pdf/renderer';
import Resume from '../components/Resume'

const ResumePage = () => {
    return (
        <PDFViewer>
            <Resume />
        </PDFViewer>
    )
}

export default ResumePage;