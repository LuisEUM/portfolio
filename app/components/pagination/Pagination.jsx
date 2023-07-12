import Link from 'next/link'

function Pagination ({ search, totalPagination, currentPage, setCurrentPage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 150, behavior: 'smooth' })
  }

  return (
    <nav className="flex justify-center items-center space-x-2">
      <Link
        className={`p-4 inline-flex items-center gap-2 rounded-md ${currentPage === 1 ? 'pointer-events-none opacity-25' : 'hover:text-primary'}`}
        href={'projects' + '?' + 'category=' + search + '&' + 'page=' + (Number(currentPage) - 1)}
        onClick={() => {
          setCurrentPage(Number(currentPage) - 1)
          scrollToTop()
        }}
      >
        <span aria-hidden="true">«</span>
        <span className="sr-only">Previous</span>
      </Link>
      {[...Array(totalPagination)].map((page, i) => (
        <Link
          key={i + 1}
          className={`font-extrabold w-10 h-10 p-4 inline-flex items-center text-sm  rounded-full ${currentPage === i + 1 ? 'bg-primary  text-zinc-900' : 'hover:border hover:border-primary hover:text-primary'}`}
          href={'projects' + '?' + 'category=' + search + '&' + 'page=' + (i + 1) }
          onClick={() => {
            setCurrentPage(i + 1)
            scrollToTop()
          }}
        >
          {i + 1}
        </Link>
      ))}

      <Link
        href={'projects' + '?' + 'category=' + search + '&' + 'page=' + (Number(currentPage) + 1) }
        className={`p-4 inline-flex items-center gap-2 rounded-md ${currentPage === totalPagination ? 'pointer-events-none opacity-25 ' : 'hover:text-primary'}`}
        onClick={() => {
          setCurrentPage(Number(currentPage) + 1)
          scrollToTop()
        }}
      >
        <span className="sr-only">Next</span>
        <span aria-hidden="true">»</span>
      </Link>
    </nav>
  )
}

export default Pagination
