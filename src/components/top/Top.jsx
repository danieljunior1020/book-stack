import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import './Top.css'

const Top = () => {
  return (
    <>
      <Carousel 
      infiniteLoop={true}
      autoPlay={true} 
      showStatus={false}
      transitionTime={1500} 
      showArrows={false}
      showIndicators={false}
      >
         <div className="tImg">
            <Link to='/'>
            <img src="./assets/images/agorra.jpeg" alt="" />
            <div className="tDescript">
                <h2 className="tTitle">andorra</h2>
                <span className="tImgp">78 propertys</span>
            </div>
            </Link>
         </div>

         <div className="tImg">
            <Link to='/'>
            <img src="./assets/images/bora.jpeg" alt="" />
            <div className="tDescript">
                <h2 className="tTitle">Bora bora</h2>
                <span className="tImgp">140 property</span>
            </div>
            </Link>
         </div>

         <div className="tImg">
            <Link to='/'>
            <img src="./assets/images/hong.jpeg" alt="" />
            <div className="tDescript">
                <h2 className="tTitle">Hong kong</h2>
                <span className="tImgp">500 property</span>
            </div>
            </Link>
         </div>

         <div className="tImg">
            <Link to='/'>
            <img src="./assets/images/turkey.jpeg" alt="" />
            <div className="tDescript">
                <h2 className="tTitle">Turkey</h2>
                <span className="tImgp">450 property</span>
            </div>
            </Link>
         </div>

         <div className="tImg">
            <Link to='/'>
            <img src="./assets/images/spain.jpeg" alt="" />
            <div className="tDescript">
                <h2 className="tTitle">Spain</h2>
                <span className="tImgp">1400 property</span>
            </div>
            </Link>
         </div>
      </Carousel>
    </>
  )
}

export default Top