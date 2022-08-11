import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'
import Tavatar from './components/ModelCanvas'

function App() {
  const [pages] = useState([
    {
      name: 'Home'
    },
    {
      name: 'Works'
    },
    {
      name: 'About'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Project'
    }
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <>
      <Navbar 
        setCurrentPage={setCurrentPage} 
        pages={pages}> 
      </Navbar>
        
      <main className='flex flex-col items-center bg-vs-bg min-h-screen h-fill text-white p-3 font-mono'>
        <Tavatar/>
        
        <Page currentPage={currentPage} setCurrentPage={setCurrentPage}></Page>
      </main>
    </>
  )
}

export default App;
