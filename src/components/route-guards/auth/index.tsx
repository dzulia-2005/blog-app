import React, { PropsWithChildren } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '../../../store/auth';

const AuthGuard:React.FC<PropsWithChildren> = ({children}) => {
    const[user] = useAtom(userAtom);

    if (!user) {
      return <Navigate to={'/'} replace/>
    }

    console.log("Authenticated user:", user);
    return <>{children}</> || <Outlet/> 
}

export default AuthGuard