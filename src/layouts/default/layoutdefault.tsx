import React from 'react'
import Pagecontainer from '../../components/pagecontainer/pagecontainer'
import Header from '../../components/header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/footer'
import  Container  from '../../components/insidecontainer/container'

const Layoutdefault:React.FC = () => {
  return (
    <>
     <Pagecontainer>
        <Header/>
          <Container>
            <Outlet/>
          </Container>
        <Footer/>
      </Pagecontainer>
    </>
  )
}

export default Layoutdefault