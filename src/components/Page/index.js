import React from 'react'
import Home from '../Home'
import Works from '../Works'
import About from '../About'
import { Project } from '../Works/Project'

export default function Page({currentPage, setCurrentPage}) {
  const changeView = page => {
    switch(page.name) {
        case 'Home':
            return <Home/>
        case 'Works':
            return <Works setCurrentPage={setCurrentPage}/>
        case 'About':
            return <About/>
        case 'Project':
            return <Project currentProject={currentPage} setCurrentPage={setCurrentPage}/>
        default:
            return <Home/>
        }
  }

  return (
    <section>
        {changeView(currentPage)}
    </section>
  )
}