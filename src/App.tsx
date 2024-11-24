import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layoutdefault from "./layouts/default/layoutdefault";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignIn from "./pages/signup/signup";
import About from "./pages/about/about";
import Author from "./pages/author/author";
import { useEffect } from "react";
import { supabase } from "./supabase";
import AuthGuard from "./components/route-guards/auth";
import Guestguard from "./components/guest-guard/auth";
import { userAtom } from "./store/auth";
import {useAtom} from 'jotai'
import Profiles from "./pages/profiles/view/profiles";




function App() {
  const [,setUser]=useAtom(userAtom)

   useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
         console.log("this is sesion : ",session)
         setUser(session)
      })

      return () => subscription.unsubscribe()
    }, [setUser])


  return (
      <BrowserRouter>
          <Routes>
            <Route element={<Layoutdefault/>}>
              <Route
                  path="/"
                  element={<Home/>}
               />
               <Route
                  path="/login"
                  element = {
                  <Guestguard>
                    <Login/>
                  </Guestguard>
                  }
               />
               <Route
                  path="/register"
                  element = {
                  <Guestguard>
                    <SignIn/>
                  </Guestguard>
                }
               />
                <Route
                  path="/about"
                  element = {
                    <AuthGuard>
                      <About/>
                    </AuthGuard>
                  }
               />
                <Route
                  path="/author"
                  element = {
                  <AuthGuard>
                      <Author/>
                  </AuthGuard>
                  }
               />
               <Route
                  path="/profile"
                  element = {
                  <AuthGuard>
                    <Profiles/>
                  </AuthGuard>}
               />
            </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
