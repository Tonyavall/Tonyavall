import { Document, Page, Text, View, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';
import sfuiBold from '../lib/fonts/sfuiBold.ttf'
import sfuiRegular from '../lib/fonts/sfuiRegular.ttf'
import sfuiLight from '../lib/fonts/sfuiLight.ttf'
import { useEffect } from 'react';
import socials from '../lib/socials';
import { projects } from '../pages/Resume';
import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { convertSvgToPdf } from '../lib/socials';

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        fontFamily: 'SFUI',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '35pt'
    },
    aboutMe: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    resumeProfilePicture: {
        borderRadius: 'rounded'
    },
    avatar: {
        borderRadius: '100%',
        width: '40px',
        height: '40px',
        marginBottom: '4pt'
    },
    name: {
        fontSize: '16pt',
        marginBottom: '8pt',
        fontStyle: 'bold',
    },
    title: {
        fontSize: '11pt',
        marginBottom: '2pt'
    },
    email: {
        fontSize: '10pt',
        marginBottom: '2pt',
        textDecoration: 'underline'
    },
    location: {
        fontSize: '10pt',
        marginBottom: '2pt'
    },
    socials: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    aboutMeIcons: {
        marginTop: '8pt',
        marginHorizontal: '4pt'
    },
    headerBox: {
        color: 'white',
        backgroundColor: '#1F2937',
        width: '76pt',
        height: '26.25pt',
        fontSize: '12pt',
        padding: '4pt',
        marginBottom: '8pt',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '8pt'
    },
    sections: {
        marginTop: '14pt',
    },
    sectionsText: {
        fontSize: '11pt',
        textIndent: '20pt',
        marginBottom: '8pt',
        lineHeight: '1.75pt',
        fontStyle: 'light'
    },
    project: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: '5pt'
    },
    projectDescription: {
        fontSize: '11pt',
        color: '#525659',
    },
    techStack: {
        display: 'inline-block',
        fontSize: '11pt',
        marginVertical: '5pt',
    },
    techStackList: {
        fontSize: '11pt',
        color: '#525659'
    },
    education: {
        fontSize: '11pt',
        marginTop: '5pt'
    },
    educationDescription: {
        fontSize: '11pt',
        color: '#525659',
        marginBottom: '5pt'
    }
});

const Resume = () => {
    const registerFont = () => {
        Font.register({
            family: 'SFUI',
            format: "truetype",
            fonts: [
                { src: sfuiRegular },
                { src: sfuiBold, fontStyle: 'bold' },
                { src: sfuiLight, fontStyle: 'light' }
            ]
        })
    }

    useEffect(() => {
        registerFont()
    }, [])

    return (
        <Document
            title="Tony's Resume"
            author="Tony Vallescas"
            subject="Resume"
        >
            <Page size="A4" style={styles.page}>
                <View style={styles.aboutMe}>
                    <Image 
                        src="https://media-exp1.licdn.com/dms/image/D5603AQFD3KV01TJQMw/profile-displayphoto-shrink_800_800/0/1664823412855?e=1670457600&v=beta&t=JsXM_Jq7-d_AT2KJ0i4FqXTQ0Q4qAZ0OCjHvfqQiKCQ"
                        style={styles.avatar}
                    />
                    <Text Font="normal" style={styles.name}>Tony Vallescas</Text>
                    <Text style={styles.title}>Web Software Developer</Text>
                    <Text href="mailto:tonyavallescas@gmail.com" style={styles.email}>tonyavallescas@gmail.com</Text>
                    <Text style={styles.location}>Elk Grove, Sacramento, Remote/Local</Text>
                    <Text style={styles.location}>California, USA</Text>

                    <View style={styles.socials}>
                        {
                            socials.map(({name, link, IconPdf, email = false}) => {
                                if (name === "Resume") return null
                                return (
                                    <Link
                                        style={styles.aboutMeIcons}
                                        key={Math.random() * (2000 - 1001) + 1001}
                                        href={email ? `mailto: ${link}` : link}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {IconPdf}
                                    </Link>
                                )
                            })
                        }
                    </View>
                </View>

                <View style={styles.sections}>

                    {/* ABOUT */}
                    <View style={styles.headerBox}>
                        <Text>About</Text>
                    </View>

                    <Text style={styles.sectionsText}>
                        I'm a full stack web developer with substantial knowledge in the MERN stack- React, NoSQL/SQL databases, Express, and Node. As well as the fundamentals- HTML, CSS, and JavaScript. Lately, I've been working with serverside rendering with NEXTJS, Graphql with Apollo, and TypeScript, however, I'm looking to learn other web development stacks with PHP, Vue, or Angular.
                    </Text>

                    <Text style={styles.sectionsText}>
                        As a current computer science student, I'm looking to grow and learn not just to better my overall code quality and apply best practices, but also to ensure that my programs are (1) intuitive and have a meaningful purpose for users, (2) performant with regards to maintainability, and (3) as scalable as my current skillset allows it to be. I love everything computers, and am open to learn and experience new tech.
                    </Text>

                    {/* PROJECTS */}
                    <View style={styles.headerBox}>
                        <Text>Projects</Text>
                    </View>

                    {
                        projects?.map(({title, description, website, github}) => (
                            <View style={styles.project}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.title}>
                                        {title}
                                    </Text>
                                    <Link
                                        style={styles.socials}
                                        href={github}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {convertSvgToPdf(AiFillGithub, { style: { marginHorizontal: '3pt' } })}
                                    </Link>
                                    <Link
                                        style={styles.socials}
                                        href={website}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {convertSvgToPdf(CgWebsite, { style: { marginHorizontal: '3pt' } })}
                                    </Link>
                                </View>
                                <Text style={styles.projectDescription}>
                                    {description}
                                </Text>
                            </View>
                        ))
                    }

                    {/* TECH STACK */}
                    <View style={styles.headerBox}>
                        <Text>Tech Stack</Text>
                    </View>

                    <View style={styles.techStack}>
                        <Text>Frontend</Text>

                        <Text style={styles.techStackList}>
                            JavaScript, TypeScript, React, HTML, CSS, ChakraUI, Tailwind, Bootstrap
                        </Text>
                    </View>

                    <View style={styles.techStack}>
                        <Text>Backend</Text>

                        <Text style={styles.techStackList}>
                            Node, NoSQL, MongoDB/Mongoose, Apollo Graphql, MySQL, Sequelize, Handlebars, Expressjs
                        </Text>
                    </View>

                    <View style={styles.techStack}>
                        <Text>DevOps</Text>

                        <Text style={styles.techStackList}>
                            AWS S3
                        </Text>
                    </View>
                    
                    <View style={styles.techStack}>
                        <Text>Languages</Text>

                        <Text style={styles.techStackList}>
                            JavaScript, TypeScript, C++
                        </Text>
                    </View>

                    {/* EDUCATION */}
                    <View style={styles.headerBox}>
                        <Text>Education</Text>
                    </View>

                    <Text style={styles.education}>Coding Certificate, Full Stack Web Development, <Text style={styles.educationDescription}>University of California, Irvine</Text></Text>
                    <Text style={styles.educationDescription}>March 2022 - September 2022</Text>

                    <Text style={styles.education}>Computer Science, AS <Text style={styles.educationDescription}>Cosumnes River College, Sacramento</Text></Text>
                    <Text style={styles.educationDescription}>2022 - Current, 3.7</Text>

                    <Text style={styles.education}>Biology: Prenursing, AS <Text style={styles.educationDescription}>Cosumnes River College, Sacramento</Text></Text>
                    <Text style={styles.educationDescription}>2019 - 2021, 3.9</Text>

                    <Text style={styles.education}>Elk Grove Highschool <Text style={styles.educationDescription}>Elk Grove, Sacramento</Text></Text>
                    <Text style={styles.educationDescription}>2015 - 2019, 4.1 Weighted</Text>

                </View>
            </Page>
        </Document>
    )
}

export default Resume;