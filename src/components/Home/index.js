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

      <div className='flex flex-row flex-wrap'>
        <div className='flex flex-col px-3 my-6'>
          <h2 className='text-4xl text-vs-pink'>Tony Vallescas</h2>
          <p>Student, Aspiring Software Engineer</p>
        </div>
        <div className='bg-[url("./assets/images/selfie.jpg")] w-32 h-32 bg-no-repeat bg-cover bg-center rounded-full'></div>
      </div>

      <div className='flex flex-col flex-wrap px-5 max-w-lg'>
        <h3 className='text-2xl text-vs-green underline underline-offset-8 mb-2'>Work</h3>
        <p className='py-4'>
            I'm a full stack web developer with expertise on the MERN stack. I'm well versed in both frontend,
            and backend frameworks and their respective libraries such as React, Nodejs, Express, NoSql, MySql,
            Graphql, etc. My works and full breadth of knowledge can be found in my portfolio.
        </p>
        <button className='text-lg text-black h-9 w-1/4 self-end rounded-md bg-vs-teal hover:bg-white font-extrabold'>Porfolio</button>
      </div>

      <div className='flex flex-col flex-wrap px-5 max-w-lg w-full'>
        <h4 className='text-2xl text-vs-green underline underline-offset-8 mb-2'>Bio</h4>

        <div className='flex flex-row py-2'>
          <p className='px-4 font-bold'>2000</p>
          <p>Born in Surigao City, PH</p>
        </div>

        <div className='flex flex-row py-2'>
          <p className='px-4 font-bold'>2019</p>
          <p>1st In UC Davis Biotech Challenge</p>
        </div>

        <div className='flex flex-row py-2'>
          <p className='px-4 font-bold'>2019</p>
          <p>Graduated from Elk Grove High w/ 4.1 weighted</p>
        </div>

        <div className='flex flex-row py-2'>
          <p className='px-4 font-bold'>2022</p>
          <p>Transfer to Sac State for Nursing w/ 3.8</p>
        </div>

        <div className='flex flex-row py-2'>
          <p className='px-4 font-bold'>2022</p>
          <p>Pivot to Computer Science, retransfer to Com. College</p>
          <p>Currently at 3.7 GPA</p>
        </div>

        <div className='flex flex-row py-2'>
          <p className='px-4 font-bold'>2022</p>
          <p>Finished UCI Full Stack Bootcamp</p>
        </div>

        <div className='flex flex-row py-2'>
          <p className='px-4 font-bold underline underline-offset-4'>Goal</p>
          <p>To find a company/home that will facilitate my growth for the rest of my college years and beyond.</p>
        </div>
      </div>
    </section>
  )
}