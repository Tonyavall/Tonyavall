import React, { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [pages] = useState([
    'Home',
    'Works',
    'Collaborations',
    'About',
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div>
        <Navbar 
          setCurrentPage={setCurrentPage} 
          pages={pages}> 
        </Navbar>
    </div>
  )
}

export default App;
