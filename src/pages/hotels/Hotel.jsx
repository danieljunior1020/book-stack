import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ListHotels from '../../components/listHotels/ListHotels'
import Search from '../../components/search/Search'
import Subscribe from '../../components/subscribe/Subscribe'
import './Hotel.css'

const Hotel = () => {
  return (
    <div>
        <Header type='small' />
        <div className="hotelContainer">
           <div className="hotelRow">
             <div className="hotelCol">
               <Search />
             </div>
             <div className="hotelCol">
                <ListHotels />
             </div>
           </div>
        </div>

        <Subscribe />
        <Footer />
    </div>
  )
}

export default Hotel