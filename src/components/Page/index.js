import React from 'react'
import Home from '../Home'
import Works from '../Works'
import About from '../About'
import Contact from '../Contact'
import { Project } from '../Works/Project'
import { AnimatePresence } from 'framer-motion'

export default function Page({currentPage, setCurrentPage}) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delay: .5
            }
        },
        exit: { 
            opacity: 0,
            transition: {
                duration: 3,
                type: 'easeInOut'
            }
        }
    }

    const changeView = page => {
    switch(page.name) {
        case 'Home':
            return <Home setCurrentPage={setCurrentPage} container={container}/>
        case 'Works':
            return <Works setCurrentPage={setCurrentPage} container={container}/>
        case 'About':
            return <About container={container}/>
        case 'Project':
            return <Project currentProject={currentPage} setCurrentPage={setCurrentPage} container={container}/>
        case 'Contact':
            return <Contact container={container}/>
        default:
            return <Home setCurrentPage={setCurrentPage} container={container}/>
        }
    }
    return (
        <AnimatePresence>
            {changeView(currentPage)}
        </AnimatePresence>
    )
}