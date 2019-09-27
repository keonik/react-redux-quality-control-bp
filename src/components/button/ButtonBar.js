import React from 'react'

import './ButtonBar.scss'

export const ButtonBarAlign = {
    left: 'left',
    right: 'right',
    center: 'center',
}

const ButtonBar = ({ align, children, className }) => {
    // default to right align
    let barClass = align ? `ButtonBar-${align}` : 'ButtonBar-right'

    // let the user pass in any additional classes they need
    if (className) {
        barClass += ` ${className}`
    }

    return <div className={barClass}>{children}</div>
}

export default ButtonBar
