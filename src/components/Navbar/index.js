export default function Navbar(props) {
  const {
    pages,
    setCurrentPage,
  } = props

  return (
    <nav className="flex justify-end">
      {
        pages.map(page=> (
          <button 
            onClick={() => setCurrentPage(page)} 
            className="mx-2"
            key={page}
            >
            {page}
          </button>
        ))
      }
    </nav>
  )
}