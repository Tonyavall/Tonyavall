import { works } from "./Works"
import { collaborations } from "./Collaborations"

export default function Works({setCurrentPage}) {
  return (
    <section className="flex justify-self-start flex-col flex-wrap w-[80vw] max-w-[32rem]">
      <h3 className='text-2xl text-vs-purple mb-2'>Works</h3>

      <div className="flex flex-row flex-wrap p-2"> 
      {
        works.map(work=> 
            <div className="flex flex-col mx-2" key={work.title}>
                <div
                  onClick={() => setCurrentPage({name: 'Project', ...work})}
                  style={{background: `url('${work.image}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                  className={'w-56 h-36 rounded-xl bg-no-repeat bg-cover bg-center'}>
                </div>
                <p className="m-1 w-56 text-vs-green">{work.title}</p>
                <p className="m-1 w-56">{work.description}</p>
            </div>
        )
      }
      </div>

      <h4 className='text-2xl text-vs-purple mb-2'>Collaborations</h4>
      <div className="flex flex-row flex-wrap p-2"> 
      {
        collaborations.map(collab=> 
            <div className="flex flex-col mx-2" key={collab.title}>
                <div 
                  onClick={() => setCurrentPage({name: 'Project', ...collab})}
                  style={{background: `url('${collab.image}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                  className={'w-56 h-36 rounded-xl bg-no-repeat bg-cover bg-center'}>
                </div>
                <p className="m-1 w-56 text-vs-green">{collab.title}</p>
                <p className="m-1 w-56">{collab.description}</p>
            </div>
        )
      }
      </div>
    </section>
  )
}