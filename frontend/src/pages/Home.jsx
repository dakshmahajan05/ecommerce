import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className=' bg-[#F8F6E4] '>
        <Header />

        <Content/>
        <Products/>
        <Footer/>
        

    </div>
  )
}

export default Home