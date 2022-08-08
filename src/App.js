import React, { useState, Suspense } from 'react'
import Navbar from './components/Navbar'
import Page from './components/Page'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Avatar } from './components/Avatar'

function App() {
  const [pages] = useState([
    'Home',
    'Works',
    'About',
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])
  
  return (
    <>
      <Navbar 
        setCurrentPage={setCurrentPage} 
        pages={pages}> 
      </Navbar>
        
      <main className='flex flex-col items-center bg-vs-bg min-h-screen h-fill text-white p-3 font-mono'>
        <Canvas
          camera={{ position: [2, 0, 12.25], fov: 15, autoRotate: true }}
          style={{
            backgroundColor: '#282A36',
            width: '300px',
            height: '350px',
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Avatar position={[0.025, -1.4, 0]} scale={[1.6,1.6,1.6]}/> 
          </Suspense>
          <OrbitControls />
        </Canvas>
        
        <Page currentPage={currentPage}></Page>
      </main>
    </>
  )
}

export default App;
