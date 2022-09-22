import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subs'>
        <div className="subsRow">
            <h2 className="subsTitle">Saving time, saving money!!</h2>

            <p className="subsDesc">
                Sign up and will send the best deal of you
            </p>

            <div className="subsInput">
                <input type="email" placeholder='get e-mail' />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe