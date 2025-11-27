import './Layout.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import OurSpace from './components/OurSpace/index.jsx'

import { BrowserRouter, Routes, Route } from "react-router";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/ourSpace' element={<OurSpace />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default Layout
