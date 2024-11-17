import { ThemeProvider } from "../../components/theme/theme-provider"
import React, { PropsWithChildren } from "react"

const  App:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App
