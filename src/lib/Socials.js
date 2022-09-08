import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineFilePdf } from 'react-icons/ai'

// If there's no link it's assumed that it's a relative path in the website
const socials = [
    {
        name: 'Github',
        link: 'https://github.com/Tonyavall',
        icon: <BsGithub/>
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/tonyavall/',
        icon: <AiFillLinkedin/>
    },
    {
        name: 'Resume',
        link: "/contact/resume",
        icon: <AiOutlineFilePdf/>,
        relative: true
    }
]

export default socials