export default function Works() {
  const works = [
    {
      title: 'eCommerce Backend',
      description: 'Description',
      image: './assets/images/eCommBackend.png'
    },
    {
      title: 'Express Note taker',
      description: 'Description',
      image: './assets/images/expressNoteTaker.png'
    },
    {
      title: 'ReadMe Generator',
      description: 'Description',
      image: './assets/images/readMeGen.gif'
    },
  ]

  const collaborations = [
    {
      title: "What's Streamin'?",
      description: 'Random Show Generator based on user options.',
      image: './assets/images/streamin.jpg'
    },
    {
      title: 'OldEgg',
      description: 'An electronics ecommerce website.',
      image: './assets/images/oldEgg.png'
    }
  ]

  return (
    <section className="flex justify-self-start flex-col flex-wrap w-[80vw] max-w-[32rem]">
      <h3 className='text-2xl text-vs-green underline underline-offset-8 mb-2'>Works</h3>

      <div className="flex flex-row flex-wrap p-2"> 
      {
        works.map(work=> 
            <div className="flex flex-col mx-2" key={work.title}>
                <div className={'w-52 h-36 rounded-xl bg-[url("' + work.image + '")] bg-no-repeat bg-cover bg-center'}></div>
                <p className="m-1">{work.title}</p>
                <p className="m-1">{work.description}</p>
            </div>
        )
      }
      </div>

      <h4 className='text-2xl text-vs-green underline underline-offset-8 mb-2'>Collaborations</h4>
      <div className="flex flex-row flex-wrap p-2"> 
      {
        collaborations.map(collab=> 
            <div className="flex flex-col mx-2" key={collab.title}>
                <div 
                  className={'w-52 h-36 rounded-xl bg-[url("' + collab.image + '")] bg-no-repeat bg-cover bg-center'}>
                </div>
                <p className="m-1 w-52">{collab.title}</p>
                <p className="m-1 w-52">{collab.description}</p>
            </div>
        )
      }
      </div>
    </section>
  )
}