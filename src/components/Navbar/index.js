export default function Navbar(props) {
  const {
    pages,
    setCurrentPage,
  } = props

  return (
    <nav className="flex justify-center bg-[#282A36] text-vs-teal p-4 font-mono">
      <div className="flex flex-wrap justify-center lg:justify-between w-2/5">
        <h1 
          onClick={()=> setCurrentPage({name: 'Home'})}
          className="flex mx-2 text-vs-pink font-extrabold text-xl content-center hover:cursor-pointer">
          Tony Vallescas
        </h1>
        <div className="flex justify-center flex-wrap">
          {
            pages.slice(1,4).map(page=> (
              <button 
                  onClick={() => setCurrentPage(page)} 
                  className="mx-2 hover:text-white"
                  key={page.name}
                  >
                  <span className="text-white">{'<'}</span>
                    {page.name}
                  <span className="text-white">{'/>'}</span>
              </button>
            ))
          }
        </div>
      </div>
    </nav>
  )
}