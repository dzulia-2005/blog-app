import React, { PropsWithChildren } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { userAtom } from '../../../store/auth';
import { useAtom } from 'jotai'
const Guestguard:React.FC<PropsWithChildren> = ({children}) => {
  const [user] = useAtom(userAtom);
  const { lang } = useParams<{ lang: string }>();

  if (user) {
    return <Navigate to={`/${lang}`} replace/>
  }

  return <>{children}</>
}

export default Guestguard