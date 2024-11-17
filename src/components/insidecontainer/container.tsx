import React, { PropsWithChildren } from 'react'

const Container:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <main className="px-4 py-8 flex-grow">
        {children}
    </main>  )
}

export default Container