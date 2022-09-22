import React from 'react'
import { Link } from 'react-router-dom'
import './City.css'

const City = () => {
  return (
    <div className='city'>
      <h2 className="cityTitle">Explore new cities</h2>
      <p className="cityDescript">
        Book and Save on Your Hotel Today! Best Price Promise. No Booking Fee. Read Real Guest Reviews. We speak your language. 24/7 Customer Service. <br />
        No Booking Fees. Secure Booking. Get Instant Confirmation. Types: Hotels, Apartments, Villas, Hostels, Resorts, B&Bs.
      </p>

      <div className="cityImage">
        <div className="cityPicture">
          <Link to='/'>
          <div className="cityImg">
            <img src="./assets/images/santori.jpeg" alt="" />
          </div>

          <h4 className="cityImgName">Grecia</h4>
          <span className="cityImgProperty">1200 propertys</span>
          </Link>
        </div>
      </div>

      <div className="cityImage">
        <div className="cityPicture">
           <Link to='/'>
           <div className="cityImg">
            <img src="./assets/images/belgica.jpeg" alt="" />
          </div>

          <h4 className="cityImgName">Belgica</h4>
          <span className="cityImgProperty">350 propertys</span>
           </Link>
        </div>
      </div>

      <div className="cityImage">
        <div className="cityPicture">
           <Link to='/'>
           <div className="cityImg">
            <img src="./assets/images/italy.jpeg" alt="" />
          </div>

          <h4 className="cityImgName">Italy</h4>
          <span className="cityImgProperty">850 propertys</span>
           </Link>
        </div>
      </div>

      <div className="cityImage">
        <div className="cityPicture">
          <Link to='/'>
          <div className="cityImg">
            <img src="./assets/images/puerto.jpeg" alt="" />
          </div>

          <h4 className="cityImgName">Puerto vallarta</h4>
          <span className="cityImgProperty">7 propertys</span>
          </Link>
        </div>
      </div>

      <div className="cityImage">
        <div className="cityPicture">
           <Link to='/'>
           <div className="cityImg">
            <img src="./assets/images/sydney.jpeg" alt="" />
          </div>

          <h4 className="cityImgName">Sydney</h4>
          <span className="cityImgProperty">540 propertys</span>
           </Link>
        </div>
      </div>
    </div>
  )
}

export default City