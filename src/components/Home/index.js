import { motion } from 'framer-motion'

export default function Home({setCurrentPage, container, item}) {
  // highlight work paragraph text -vy
  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col flex-wrap items-center"
    >    
      <motion.div variants={item}> 
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

        <div className='flex flex-col flex-wrap px-5 max-w-lg w-full'>
          <h4 className='text-2xl text-vs-purple mb-2 font-bold'>Bio</h4>

          <div className='flex flex-row py-2'>
            <p className='px-4'>2000</p>
            <p>Born in Surigao City, Philippines</p>
          </div>

          <div className='flex flex-row py-2'>
            <p className='px-4'>2019</p>
            <p>1st In UC Davis Biotech Challenge</p>
          </div>

          <div className='flex flex-row py-2'>
            <p className='px-4'>2019</p>
            <p>Graduated from Elk Grove High w/ 4.1 weighted</p>
          </div>

          <div className='flex flex-row py-2'>
            <p className='px-4'>2022</p>
            <p>Transfer to Sac State for Nursing w/ 3.8</p>
          </div>

          <div className='flex flex-row py-2'>
            <p className='px-4'>2022</p>
            <p>Pivot to Computer Science, retransfer to Com. College</p>
            <p>Currently at 3.7 GPA</p>
          </div>

          <div className='flex flex-row py-2'>
            <p className='px-4'>2022</p>
            <p>Finished UCI Full Stack Bootcamp</p>
          </div>

          <div className='flex flex-row py-2'>
            <p className='px-4 text-vs-green'>Goal</p>
            <p>To find a company/home that will facilitate my growth for the rest of my college years and beyond.</p>
          </div>
        </div>
      </motion.div> 
    </motion.section>
  )
}