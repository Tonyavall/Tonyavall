import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'

function App() {
  const [pages] = useState([
    'Home',
    'Works',
    'Collaborations',
    'About',
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <>
      <Navbar 
        setCurrentPage={setCurrentPage} 
        pages={pages}> 
      </Navbar>
        
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
    </>
  )
}

export default App;
