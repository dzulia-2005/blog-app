import  { useContext } from 'react'
import { Authcontext } from '..'

export const Useauthcontext = () => {
  const authcontext = useContext(Authcontext)

    if (!authcontext) {
        throw new Error('u must use Auth context inside auth context provider')
    }

  return authcontext
}

