import React, { PropsWithChildren } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '../../../store/auth';

const AuthGuard:React.FC<PropsWithChildren> = ({children}) => {
    const[user] = useAtom(userAtom);
    const { lang } = useParams<{ lang: string }>();


    if (!user) {
      return  <Navigate to={`/${lang}/login`} replace/>
    }

    console.log("Authenticated user:", user);
    return <>{children}</> || <Outlet/> 
}

export default AuthGuard