import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footRow">
        <div className="footCol">
            <ul>
                <li>
                    <Link to='/'>
                       Country state
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                         Region
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        City hall
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Airports
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Hotel stadies
                    </Link>
                </li>
            </ul>
        </div>
        <div className="footCol">
        <ul>
                <li>
                    <Link to='/'>
                       Home
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                         Aparments
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Resorts
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Villages
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Hostals
                    </Link>
                </li>
            </ul>
        </div>
        <div className="footCol">
        <ul>
                <li>
                    <Link to='/'>
                       Destinations
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                         Discover more
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Reviews 
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                       Several holidays
                    </Link>
                </li>
            </ul>
        </div>
        <div className="footCol">
        <ul>
                <li>
                    <Link to='/'>
                       Car rent
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                         Flight find
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Restaurants
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Carrers
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Term & Conditions
                    </Link>
                </li>
            </ul>
        </div>
        </div>

        <div className="footRow">
            <div className="footCol">
                <p className="copyright">
                    &copy; 2022 right reserved. powered by junior peralta.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer