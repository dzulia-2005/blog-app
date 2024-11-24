import React, { PropsWithChildren } from 'react'

const Pagecontainer:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='min-h-screen flex flex-col'>{children}</div>
  )
}

export default Pagecontainer