import React, { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom';
import { userAtom } from '../../../store/auth';
import { useAtom } from 'jotai'
const Guestguard:React.FC<PropsWithChildren> = ({children}) => {
  const [user] = useAtom(userAtom);

  if (user) {
    return <Navigate to={'/'} replace/>
  }

  return <>{children}</>
}

export default Guestguard