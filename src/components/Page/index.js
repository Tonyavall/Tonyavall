import React from 'react'
import PageContent from '../PageContent'


export default function Page({currentPage}) {
  switch(currentPage) {
    case 'Home':
    default:
      return <Home/>
  }
}