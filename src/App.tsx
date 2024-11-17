import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layoutdefault from "./layouts/default/layoutdefault";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignIn from "./pages/signup/signup";


function App() {


  return (
      <BrowserRouter>
          <Routes>
            <Route element={<Layoutdefault/>}>
              <Route
                  path="/"
                  element={<Home/>}
               />
               <Route
                  path="login"
                  element = {<Login/>}
               />
               <Route
                  path="register"
                  element = {<SignIn/>}
               />
            </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
