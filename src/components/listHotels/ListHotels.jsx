import React from 'react'
import ItemHotels from '../itemHotels/ItemHotels'
import './ListHotels.css'

const ListHotels = () => {
  return (
    <div className='listHotel'>
        <ItemHotels />
        <ItemHotels />
        <ItemHotels />
        <ItemHotels />
    </div>
  )
}

export default ListHotels