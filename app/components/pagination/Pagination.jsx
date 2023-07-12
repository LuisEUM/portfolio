
function Pagination ({ search, totalPagination }) {
  return (
    <nav className="flex justify-center items-center space-x-2">
      <a
        className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
        href='#'
      >
        <span aria-hidden="true">«</span>
        <span className="sr-only">Previous</span>
      </a>
      {[...Array(totalPagination)].map((page, i) => (
        <a
          key={i}
          className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
          href={'projects' + '/' + search + '/' + (i + 1) }
        >
          {i + 1}
        </a>
      ))}

      <a>
        <span className="sr-only">Next</span>
        <span aria-hidden="true">»</span>
      </a>
    </nav>
  )
}

export default Pagination
