import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layoutdefault from "./layouts/default/layoutdefault";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignIn from "./pages/signup/signup";
import About from "./pages/about/about";
import Author from "./pages/author/author";


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
                  path="/login"
                  element = {<Login/>}
               />
               <Route
                  path="/register"
                  element = {<SignIn/>}
               />
                <Route
                  path="/about"
                  element = {<About/>}
               />
                <Route
                  path="/author"
                  element = {<Author/>}
               />
            </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
