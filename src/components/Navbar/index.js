export default function Navbar(props) {
  const {
    pages,
    setCurrentPage,
  } = props

  return (
    <nav className="flex justify-center bg-zinc-800 text-vs-teal p-4 font-mono">
      <div className="flex flex-wrap justify-center lg:justify-between w-2/5">
        <h1 className="flex mx-2 text-vs-pink font-extrabold text-xl content-center">
          Tony Vallescas
        </h1>
        <div className="flex justify-center flex-wrap">
        {
            pages.map(page=> (
              <button 
                  onClick={() => setCurrentPage(page)} 
                  className="mx-2 hover:text-white"
                  key={page}
                  >
                  <span className="text-white">{'<'}</span>
                    {page}
                  <span className="text-white">{'/>'}</span>
              </button>
            ))
          }
        </div>
      </div>
    </nav>
  )
}