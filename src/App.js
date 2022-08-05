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
        
      <main className='flex justify-center bg-zinc-800 h-screen text-white p-3 font-mono'>
        <Page currentPage={currentPage}></Page>
      </main>
    </>
  )
}

export default App;
