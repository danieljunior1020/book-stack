import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PhotoAlbum from 'react-photo-album'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './Place.css'

const Place = () => {

  const photos = [
    {
      src: "/assets/images/hotels/hotel-1.jpeg",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/hotels/hotel-2.jpeg",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/hotels/hotel-3.jpeg",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/hotels/hotel-4.jpeg",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/hotels/hotel-5.jpeg",
      width: 800,
      height: 600
    },
    {
      src: "/assets/images/hotels/hotel-6.jpeg",
      width: 800,
      height: 600
    },
  ];

  return (
    <>
      <Header type='small' />

      <div className="placeContainer">
        <div className="placeRow">
          <div className="placeCol">
            <h2 className="placeTitle">Grand Paradise x</h2>
            <span>
              <FontAwesomeIcon icon={faMapLocation} />
              av. fontbleu #16 reu paradise
            </span>
          </div>

          <div className="placeCol">
            <button className="placeBtn">Book now</button>
          </div>
        </div>
        <div className="placeRow">
          <PhotoAlbum layout="rows" photos={photos} />
        </div>
        <div className="placeRow">
          <h3 className="placeSub">Descript</h3>
           <p className="placeDesc">
             With stay in paraise rue in puerto vallarta. yes ll be with <br />
             5 minutes of ruel museum . featured amazing culture things of this wonder place <br />
             include 24 hours front desk, luggar storage and much facilites.
           </p>
        </div>

         <Subscribe />
         <Footer />
      </div>
    </>
  )
}

export default Place