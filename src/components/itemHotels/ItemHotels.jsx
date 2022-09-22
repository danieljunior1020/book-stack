import React from 'react'
import './ItemHotels.css'

const ItemHotels = () => {
    return (
        <div className='itemHotel'>
            <div className="itemHotelCol">
                <img src="./assets/images/hotels/hotel-1.jpeg" alt="" />
            </div>
            <div className="itemHotelCol">
                <div className="itemHotelDiv">
                    <h2>Grand paradise x</h2>
                </div>
                <div className="itemHotelBoxs">
                    <div className="itemHotelDiv">
                        <span className='ratings'>6.2</span>
                    </div>
                    <div className="itemHotelDiv">
                        <span>Wonderland</span>
                        <span>433 review</span>
                    </div>
                </div>
            </div>
            <div className="itemHotelCol">
                <div className="itemHotelColBox">
                    <h2>$ 60.00</h2>
                </div>
                <div className="itemHotelColBox">
                    <span>Free WI-FI</span>
                    <span>Free Park</span>
                    <span>Free Break</span>
                </div>

                <div className="itemHotelColBox">
                  <button>View Deals</button>
                </div>
            </div>
        </div>
    )
}

export default ItemHotels