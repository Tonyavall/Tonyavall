import React from 'react'
import Home from '../Home'
import Works from '../Works'
import Collaborations from '../Collaborations'
import About from '../About'

export default function Page({currentPage}) {
  const changeView = page => {
    switch(page) {
        case 'Home':
            return <Home/>
        case 'Works':
            return <Works/>
        case 'Collaborations':
            return <Collaborations/>
        case 'About':
            return <About/>
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