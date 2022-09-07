import { TbBrandTailwind } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { SiJquery } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { SiHandlebarsdotjs } from 'react-icons/si'

// backend
import { SiMysql } from 'react-icons/si'
import { SiSequelize } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'

// dev tools
import { SiInsomnia } from 'react-icons/si'
import { AiFillSlackCircle } from 'react-icons/ai'
import { DiVisualstudio } from 'react-icons/di'

const techStack = {
    frontend: [
        { name: "React", ReactIcon: FaReact },
        { name: "HTML", ReactIcon: AiFillHtml5 },
        { name: "CSS", ReactIcon: SiCss3 },
        { name: "JavaScript", ReactIcon: SiJavascript },
        { name: "TypeScript", ReactIcon: null },
        { name: "NEXTjs", ReactIcon: null },
        { name: "Tailwind", ReactIcon: TbBrandTailwind },
        { name: "Bootstrap", ReactIcon: FaBootstrap },
        { name: "Jquery", ReactIcon: SiJquery },
        { name: "Handlebars", ReactIcon: SiHandlebarsdotjs },
        { name: "Threejs", ReactIcon: null },
        { name: "ChakraUI", ReactIcon: null }
    ],
    backend: [
        { name: "Nosql", ReactIcon: null },
        { name: "MongoDB", ReactIcon: SiMongodb },
        { name: "Mongoose", ReactIcon: null },
        { name: "Mysql2", ReactIcon: SiMysql },
        { name: "Sequelize", ReactIcon: SiSequelize },
        { name: "Nodejs", ReactIcon: DiNodejs },
        { name: "AWS S3", ReactIcon: null },
    ],
    devTools: [
        { name: "Slack", ReactIcon: AiFillSlackCircle },
        { name: "Insomnia", ReactIcon: SiInsomnia },
        { name: "VScode", ReactIcon: DiVisualstudio }
    ]
}

export default techStack;