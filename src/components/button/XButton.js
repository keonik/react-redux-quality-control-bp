import React from 'react'

import './XButton.css'

const XButton = ({ className, text, onClick }) => {
    let btnClass = `XButton`
    if (className) {
        btnClass = `XButton ${className}`
    }

    return (
        <button className={btnClass}>
            {text}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="X"
                viewBox="0 0 9.671 9.672"
                onClick={onClick}
            >
                <path
                    d="M6.282,100.833l3.256-3.256a.483.483,0,0,0,0-.682l-.756-.757a.483.483,0,0,0-.682,0L4.843,99.395,1.587,96.139a.483.483,0,0,0-.682,0L.149,96.9a.483.483,0,0,0,0,.682L3.4,100.833.149,104.089a.483.483,0,0,0,0,.682l.756.756a.483.483,0,0,0,.682,0l3.255-3.256L8.1,105.528a.483.483,0,0,0,.682,0l.756-.756a.483.483,0,0,0,0-.682Z"
                    transform="translate(-0.007 -95.998)"
                />
            </svg>
        </button>
    )
}

export default XButton
