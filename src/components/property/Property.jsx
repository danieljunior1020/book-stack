import React from 'react'
import { Link } from 'react-router-dom'
import './Property.css'

const Property = () => {
    return (
        <div className='proprContainer'>
            <h3 className="proprTitle">Brows of more propertys</h3>
            <div className="cityImage">
                <div className="cityPicture">
                    <Link to='/'>
                    <div className="cityImg">
                        <img src="./assets/images/hotel.jpeg" alt="" />
                    </div>

                    <h4 className="cityImgName">Hotel</h4>
                    <span className="cityImgProperty">1000 propertys</span>
                    </Link>
                </div>
            </div>

            <div className="cityImage">
                <div className="cityPicture">
                    <Link to='/'>
                        <div className="cityImg">
                            <img src="./assets/images/apartament.jpeg" alt="" />
                        </div>

                        <h4 className="cityImgName">Apartament</h4>
                        <span className="cityImgProperty">640 propertys</span>
                    </Link>
                </div>
            </div>

            <div className="cityImage">
                <div className="cityPicture">
                   <Link to='/'>
                   <div className="cityImg">
                        <img src="./assets/images/resort.jpeg" alt="" />
                    </div>

                    <h4 className="cityImgName">Resorts</h4>
                    <span className="cityImgProperty">545 propertys</span>
                   </Link>
                </div>
            </div>

            <div className="cityImage">
                <div className="cityPicture">
                   <Link to='/'>
                   <div className="cityImg">
                        <img src="./assets/images/villa.jpeg" alt="" />
                    </div>

                    <h4 className="cityImgName">Villages</h4>
                    <span className="cityImgProperty">35 propertys</span>
                   </Link>
                </div>
            </div>

            <div className="cityImage">
                <div className="cityPicture">
                   <Link to='/'>
                   <div className="cityImg">
                        <img src="./assets/images/cabin.jpeg" alt="" />
                    </div>

                    <h4 className="cityImgName">Cabin</h4>
                    <span className="cityImgProperty">230 propertys</span>
                   </Link>
                </div>
            </div>
        </div>
    )
}

export default Property