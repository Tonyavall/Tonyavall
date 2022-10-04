import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineFilePdf } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { BsPersonCircle } from 'react-icons/bs'
import { Svg, Path } from '@react-pdf/renderer';

// converts react icon svg to react pdf svg
export const convertSvgToPdf = (svgFunction) => {
    const { attr, children } = svgFunction().props

    return (
        <Svg
            width="13" height="13"
            viewBox={attr.viewBox}
            key={Math.random() * (1000 - 1) + 1}
        >
            {
                children?.map(({props}) => (
                    <Path
                        key={Math.random() * (2000 - 1001) + 1001}
                        {...props}
                        fill="#1F2937"
                    />
                ))
            }
        </Svg>
    )
}

const socials = [
    {
        name: 'Github',
        link: 'https://github.com/Tonyavall',
        icon: <BsGithub/>,
        IconPdf: convertSvgToPdf(BsGithub)
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/tonyavall/',
        icon: <AiFillLinkedin/>,
        IconPdf: convertSvgToPdf(AiFillLinkedin)
    },
    {
        name: 'Portfolio',
        link: "https://tonyavall.github.io/",
        icon: <BsPersonCircle/>,
        IconPdf: convertSvgToPdf(BsPersonCircle)
    },
    {
        name: 'Gmail',
        link: 'tonyavallescas@gmail.com',
        email: true,
        icon: <SiGmail/>,
        IconPdf: convertSvgToPdf(SiGmail)
    },
    {
        name: 'Resume',
        link: "/contact/resume",
        icon: <AiOutlineFilePdf/>,
        relative: true
    }
]

export default socials