import React from 'react'
import Home from '../Home'
import Works from '../Works'
import About from '../About'
import { Project } from '../Works/Project'

export default function Page({currentPage, setCurrentPage}) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.25
            }
        }
    }
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }
  const changeView = page => {
    switch(page.name) {
        case 'Home':
            return <Home setCurrentPage={setCurrentPage} container={container} item={item}/>
        case 'Works':
            return <Works setCurrentPage={setCurrentPage} container={container} item={item}/>
        case 'About':
            return <About/>
        case 'Project':
            return <Project currentProject={currentPage} setCurrentPage={setCurrentPage} container={container} item={item}/>
        default:
            return <Home setCurrentPage={setCurrentPage} container={container} item={item}/>
        }
  }

  return (
    <section>
        {changeView(currentPage)}
    </section>
  )
}