import { works } from "../../../lib/Works"
import { collaborations } from "../../../lib/Collaborations"
import { motion } from 'framer-motion'

export default function Works({setCurrentPage, container, item}) {
  return (
    <motion.section 
      className="flex justify-self-start flex-col flex-wrap w-[80vw] max-w-[32rem]"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h4 className='text-2xl text-vs-purple'>Collaborations</h4>
      <motion.div variants={item}>
        <div className="flex flex-row flex-wrap p-2 justify-center"> 
        {
          collaborations.map(collab=> 
              <div className="flex flex-col mx-2 my-5" key={collab.title}>
                  <div 
                    onClick={() => setCurrentPage({name: 'Project', ...collab})}
                    style={{background: `url('${collab.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                    className={'w-56 h-36 rounded-xl bg-no-repeat bg-cover bg-center hover:cursor-pointer'}>
                  </div>
                  <p className="m-1 w-56 text-vs-green">{collab.title}</p>
                  <p className="m-1 w-56">{collab.description}</p>
              </div>
          )
        }
        </div>

        <hr className="my-6 bg-gray-600 h-[2.5px] border-0 rounded"></hr>

        <h3 className='text-2xl text-vs-purple'>Works</h3>
        <div className="flex flex-row flex-wrap p-2 justify-center"> 
        {
          works.map(work=> 
              <div className="flex flex-col mx-2 my-5" key={work.title}>
                  <div
                    onClick={() => setCurrentPage({name: 'Project', ...work})}
                    style={{background: `url('${work.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                    className={'w-56 h-36 rounded-xl bg-no-repeat bg-cover bg-center hover:cursor-pointer'}>
                  </div>
                  <p className="m-1 w-56 text-vs-green">{work.title}</p>
                  <p className="m-1 w-56">{work.description}</p>
              </div>
          )
        }
        </div>
      </motion.div>
    </motion.section>
  )
}