import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Model'

export default function Home() {
  return (
    <section className="flex flex-col flex-wrap items-center">
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: '#27272A',
          width: '300px',
          height: '350px',
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[0.025, -1.4, 0]} scale={[1.6,1.6,1.6]}/> 
        </Suspense>
        <OrbitControls />
      </Canvas>
      
      <p className="text-center bg-zinc-700 m-4 p-3 rounded-md">
        Hi! I'm a web developer and compsci student in NorCal.
      </p>

      <div className='min-w-full px-5 my-6'>
        <h2 className='text-4xl text-vs-pink'>Tony Vallescas</h2>
        <p>Student, Aspiring Software Engineer</p>
      </div>

      <div className='flex flex-col flex-wrap px-5 max-w-lg'>
        <h3 className='text-2xl text-vs-green underline underline-offset-8 mb-2'>Work</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting.
        </p>
        <button className='text-lg text-black h-9 w-1/4 self-end rounded-md bg-vs-teal hover:bg-white font-extrabold'>Porfolio</button>
      </div>
    </section>
  )
}