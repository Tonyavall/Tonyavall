import { motion, AnimatePresence } from 'framer-motion'
// import { useEffect, useState } from 'react'

export default function Home({setCurrentPage, container}) {
  // const [isVisible, setVisibility] = useState(true)
  // useEffect(() => {
  //   setVisibility(true)
  //   console.log(isVisible)
  //   return () => {
  //     setVisibility(false)
  //     console.log(isVisible)
  //   }
  // }, [])
  return (
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col flex-wrap items-center"
        exit="exit"
        key="homeExit"
      >
        <div> 
          <p className="text-center bg-gray-600 mx-4 my-6 p-3 rounded-md">
            Hi! I'm a web developer and compsci student in NorCal.
          </p>

          <div className='flex flex-row justify-between flex-wrap w-full px-5'>
            <div className='flex flex-col my-6'>
              <h2 className='text-4xl text-vs-pink font-bold'>Tony Vallescas</h2>
              <p className='italic'>Student, Aspiring Software Engineer</p>
            </div>
            <div className='bg-[url("../public/assets/images/selfie.jpg")] w-32 h-32 bg-no-repeat bg-cover bg-center rounded-full'></div>
          </div>

          <div className='flex flex-col flex-wrap px-5 max-w-lg'>
            <h3 className='text-2xl text-vs-purple font-bold'>Work</h3>
            <p className='py-4 indent-6'>
                I'm a <span className='text-vs-green'>full stack</span> web developer with expertise on the <span className='text-vs-green'>MERN</span> stack. 
                I'm well versed in both <span className='text-vs-green'>frontend</span>, and <span className='text-vs-green'>backend </span> 
                frameworks and their respective libraries such as <span className='text-vs-green'>React </span> , Nodejs, Express, NoSql, MySql,
                Graphql, etc. My works and full breadth of knowledge can be found in my <span className='text-vs-green'>Works </span> and <span className='text-vs-green'>About </span>  page.
            </p>
            <button 
              onClick={() => setCurrentPage({name: 'Works'})}
              className='text-md text-vs-bg h-9 w-[100px] self-center rounded-md bg-vs-teal hover:bg-white font-extrabold'
            >
              Works
            </button>
          </div>
        </div> 
      </motion.section>
  )
}