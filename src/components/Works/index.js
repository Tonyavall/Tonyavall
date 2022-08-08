export default function Works({currentPage}) {
  const works = [
    {
      title: 'eCommerce Backend',
      description: 'Description',
      image: '/assets/images/eCommBackend.png'
    },
    {
      title: 'Express Note taker',
      description: 'Description',
      image: '/assets/images/expressNoteTaker.png'
    },
    {
      title: 'ReadMe Generator',
      description: 'Description',
      image: '/assets/images/readMeGen.gif'
    },
  ]

  const collaborations = [
    {
      title: "What's Streamin'?",
      description: 'Random Show Generator based on user options.',
      image: '/assets/images/streamin.jpg'
    },
    {
      title: 'OldEgg',
      description: 'An electronics ecommerce website.',
      image: '/assets/images/oldEgg.png'
    }
  ]

  return (
    <section className="flex justify-self-start flex-col flex-wrap w-[80vw] max-w-[32rem]">
      <h3 className='text-2xl text-vs-purple underline underline-offset-8 mb-2'>Works</h3>

      <div className="flex flex-row flex-wrap p-2"> 
      {
        works.map(work=> 
            <div className="flex flex-col mx-2" key={work.title}>
                <div 
                  style={{background: `url('${work.image}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                  className={'w-56 h-36 rounded-xl bg-no-repeat bg-cover bg-center'}>
                </div>
                <p className="m-1 w-56 text-vs-green">{work.title}</p>
                <p className="m-1 w-56">{work.description}</p>
            </div>
        )
      }
      </div>

      <h4 className='text-2xl text-vs-purple underline underline-offset-8 mb-2'>Collaborations</h4>
      <div className="flex flex-row flex-wrap p-2"> 
      {
        collaborations.map(collab=> 
            <div className="flex flex-col mx-2" key={collab.title}>
                <div 
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