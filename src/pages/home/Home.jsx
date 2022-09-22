import React from 'react'
import City from '../../components/city/City'
import Footer from '../../components/footer/Footer'
import GridImage from '../../components/gridImage/GridImage'
import Header from '../../components/header/Header'
import Property from '../../components/property/Property'
import Subscribe from '../../components/subscribe/Subscribe'
import Top from '../../components/top/Top'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Header />

        <div className="main__container">
            <City />
            <Property />
            <Top />
            <GridImage />
            <Subscribe />
            <Footer />
        </div>
    </div>
  )
}

export default Home