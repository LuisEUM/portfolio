// import React from 'react'

const ResponsiveList = ({ children }) => {
  return (
<>
  <div className="mx-auto max-w-2xl px-4  sm:px-6 py-12 lg:max-w-7xl lg:px-8">
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      {children}
    </div>
  </div>
</>
  )
}

export default ResponsiveList
