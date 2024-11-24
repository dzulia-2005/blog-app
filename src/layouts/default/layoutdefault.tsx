import React from 'react'
import Pagecontainer from '../../components/base/pagecontainer/pagecontainer'
import Header from '../../components/base/header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/base/footer/footer'
import  Container  from '../../components/base/insidecontainer/container'

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