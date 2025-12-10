import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Content2 from '../components/Content2'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=' bg-[#F8F6E4] '>
        <Header />

        <Content/>
        {/* <Content2/> */}
        <Footer/>

    </div>
  )
}

export default Home