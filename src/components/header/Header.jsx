import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCamera, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = ({ type }) => {

    const [destiny, setDestiny] = useState("")

    const [open, setOpen] = useState(false)

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [options, setOptions] = useState(false)

    const [option, setOption] = useState({
        adult: 1,
        child: 0,
        roomate: 1
    })

    const navigate = useNavigate()

    const handleOpt = (name, operation) => {
        setOption((pre) => {
            return {
                ...pre,
                [name]: operation === "increment" ?
                    option[name] + 1 : option[name] - 1
            }
        })
    }


    const handleSearchin = () => {
        navigate("/hotel", { state: { destiny, date, option }})
    }


    return (
        <div className='head__container'>
            <div className="head__row">
                <div className="head__col">
                    <Link to='/'>Book travel</Link>
                </div>
                <div className="head__col">
                    <button>Register</button>
                    <button>Sig in</button>
                </div>
            </div>

            <div className="head__row">
                <div className={type === "small" ? "head__col small" : "head__col"}>
                    <div className="icons">
                        <div className="icon active">
                            <FontAwesomeIcon icon={faBed} />
                            <Link to='/'>Stayins</Link>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faPlane} />
                            <Link to='/'>Flayers</Link>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCar} />
                            <Link to='/'>Car rent</Link>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCamera} />
                            <Link to='/'>Attraction</Link>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faTaxi} />
                            <Link to='/'>Airport cabs</Link>
                        </div>
                    </div>
                </div>

                { type !== "small" && 
                    <>
                        <div className="head__col">
                            <h2>Make reservs</h2>
                        </div>
                        <div className="head__col">
                            <div className="searchin">
                                <div className="searchin__item">
                                    <FontAwesomeIcon icon={faBed} />
                                    <input 
                                    type="text" 
                                    onChange={(e) => setDestiny(e.target.value)}
                                    placeholder='where going?' 
                                    />
                                </div>

                                <div className="searchin__item">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    <span
                                        onClick={() => setOpen(!open)}
                                    >
                                        {
                                            `${format(date[0].startDate, "dd/MM/yyyy")} to 
                                ${format(date[0].endDate, "dd/MM/yyyy")}`
                                        }
                                    </span>
                                    {open && (
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={item => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            className='dating'
                                            minDate={new Date()}
                                        />
                                    )}
                                </div>

                                <div className="searchin__item">
                                    <FontAwesomeIcon icon={faPerson} />
                                    <span
                                        onClick={() => setOptions(!options)}
                                    >
                                        {
                                            `${option.adult} adult -
                                     ${option.child} child -
                                     ${option.roomate} roomate`
                                        }
                                    </span>
                                    {
                                        options && (
                                            <div className="options">
                                                <div className="optItem">
                                                    <span>Adult</span>
                                                    <div className="optButton">
                                                        <button
                                                            onClick={() => handleOpt("adult", "decrement")}
                                                            className="optBtn"
                                                            disabled={
                                                                option.adult <= 1
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <span>{option.adult}</span>
                                                        <button
                                                            onClick={() => handleOpt("adult", "increment")}
                                                            className="optBtn"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="optItem">
                                                    <span>Child</span>
                                                    <div className="optButton">
                                                        <button
                                                            onClick={() => handleOpt("child", "decrement")}
                                                            className="optBtn"
                                                            disabled={
                                                                option.child <= 0
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <span>{option.child}</span>
                                                        <button
                                                            onClick={() => handleOpt("child", "increment")}
                                                            className="optBtn"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="optItem">
                                                    <span>Roomate</span>
                                                    <div className="optButton">
                                                        <button
                                                            onClick={() => handleOpt("roomate", "decrement")}
                                                            className="optBtn"
                                                            disabled={
                                                                option.roomate <= 1
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <span>{option.roomate}</span>
                                                        <button
                                                            onClick={() => handleOpt("roomate", "increment")}
                                                            className="optBtn"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>

                                <div 
                                className="searchin__item"
                                onClick={handleSearchin}
                                >
                                    <button className='btnSearch'>search</button>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header