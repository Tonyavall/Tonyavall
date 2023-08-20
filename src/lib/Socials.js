import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineFilePdf } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { BsPersonCircle } from 'react-icons/bs'

const socials = [
    {
        name: 'Github',
        link: 'https://github.com/Tonyavall',
        icon: <BsGithub/>,
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/tonyavall/',
        icon: <AiFillLinkedin/>,
    },
    {
        name: 'Portfolio',
        link: "https://tonyavall.github.io/",
        icon: <BsPersonCircle/>,
    },
    {
        name: 'Gmail',
        link: 'tonyavallescas@gmail.com',
        email: true,
        icon: <SiGmail/>,
    }
]

export default socials