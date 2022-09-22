import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import './Search.css'

const Search = () => {
 
    const location = useLocation()

    const [destiny, setDestiny] = useState(location.state.destiny)

    const [open, setOpen] = useState(false)

    const [date, setDate] = useState(location.state.date)

    const [option, setOption] = useState(location.state.option)

    return (
    <div className="searchHotel">
        <div className="search">
            <div className="searchItem">
                <label>Destinations</label>
                <input placeholder={destiny} type="text" />
            </div>

            <div className="searchItem">
                <label>Check date</label>
                <label
                    onClick={() => setOpen(!open)}
                >
                    {
                        `${format(date[0].startDate, "dd/MM/yyyy")} to 
            ${format(date[0].endDate, "dd/MM/yyyy")}`
                    }
                </label>
                {open && (
                    <DateRange
                        onChange={item => setDate([item.selection])}
                        minDate={
                            new Date()
                        }
                        ranges={date}
                    />
                )}
            </div>

            <div className="searchItem">
               <div className="searchOpt">
                 <div className="searchOptItem">
                    <label className="searchOptText">
                        Min price <sup>per night</sup>
                    </label>
                    <input type="number" className='searchOptInput' />
                 </div>

                 <div className="searchOptItem">
                    <label className="searchOptText">
                        Max price <sup>per night</sup>
                    </label>
                    <input type="number" className='searchOptInput' />
                 </div>

                 <div className="searchOptItem">
                    <label className="searchOptText">
                        Adult
                    </label>
                    <input 
                    type="number" 
                    min={1}
                    className='searchOptInput' 
                    placeholder={option.adult}
                    />
                 </div>

                 <div className="searchOptItem">
                    <label className="searchOptText">
                        Child
                    </label>
                    <input 
                    type="number" 
                    min={0}
                    className='searchOptInput' 
                    placeholder={option.child}
                    />
                 </div>

                 <div className="searchOptItem">
                    <label className="searchOptText">
                        Roomate
                    </label>
                    <input 
                    type="number" 
                    min={1}
                    className='searchOptInput' 
                    placeholder={option.roomate}
                    />
                 </div>
               </div>
            </div>

            <div className="searchItem">
                <button className='btnSearch'>search</button>
            </div>
        </div>
    </div>
    )
}

export default Search