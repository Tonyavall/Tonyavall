export default function Works() {
  const works = [
    {
      title: 'Work 1',
      description: 'Description',
      image: 'image file path here'
    },
    {
      title: 'Work 2',
      description: 'Description',
      image: 'image file path here'
    },
    {
      title: 'Work 3',
      description: 'Description',
      image: 'image file path here'
    },
  ]

  const collaborations = [
    {
      title: 'Work 1',
      description: 'Description',
      image: 'image file path here'
    },
    {
      title: 'Work 1',
      description: 'Description',
      image: 'image file path here'
    },
    {
      title: 'Work 1',
      description: 'Description',
      image: 'image file path here'
    },
  ]

  return (
    <section className="flex justify-self-start flex-col flex-wrap w-[80vw] max-w-[32rem]">
      <h3 className='text-2xl text-vs-green underline underline-offset-8 mb-2'>Works</h3>

      <div className="flex flex-row flex-wrap p-2"> 
      {
        works.map(work=> 
            <div className="flex flex-col mx-2">
                <div className="w-52 h-36 bg-white rounded-xl"></div>
                <p className="m-1">{work.title}</p>
                <p className="m-1">{work.description}</p>
            </div>
        )
      }
      </div>

      <h4 className='text-2xl text-vs-green underline underline-offset-8 mb-2'>Collaborations</h4>
      <div className="flex flex-row flex-wrap p-2"> 
      {
        collaborations.map(work=> 
            <div className="flex flex-col mx-2">
                <div className="w-52 h-36 bg-white rounded-xl"></div>
                <p className="m-1">{work.title}</p>
                <p className="m-1">{work.description}</p>
            </div>
        )
      }
      </div>
    </section>
  )
}