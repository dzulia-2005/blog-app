import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layoutdefault from "./layouts/default/layoutdefault";
import Home from "./pages/home/view/home";
import Login from "./pages/login/login";
import SignIn from "./pages/signup/signup";
import About from "./pages/about/about";
import Author from "./pages/author/author";
import { useEffect } from "react";
import { supabase } from "./supabase";
import AuthGuard from "./components/route-guards/auth";
import Guestguard from "./components/guest-guard/auth";
import { userAtom } from "./store/auth";
import { useAtom } from "jotai";
import Profiles from "./pages/profiles/view/profiles";
import AddCard from "./pages/createcard";

function App() {
  const [, setUser] = useAtom(userAtom);


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("this is session : ", session);
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Navigate to="/en" />} />
        <Route path="/:lang">
          <Route element={<Layoutdefault />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={
                <Guestguard>
                  <Login />
                </Guestguard>
              }
            />
            <Route
              path="register"
              element={
                <Guestguard>
                  <SignIn />
                </Guestguard>
              }
            />
            <Route
              path="write"
              element={
                <AuthGuard>
                    <AddCard />
                </AuthGuard>
              }

            />
            <Route
              path="about"
              element={
                <AuthGuard>
                  <About />
                </AuthGuard>
              }
            />
            <Route
              path="author"
              element={
                <AuthGuard>
                  <Author />
                </AuthGuard>
              }
            />
            <Route
              path="profile"
              element={
                <AuthGuard>
                  <Profiles />
                </AuthGuard>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
