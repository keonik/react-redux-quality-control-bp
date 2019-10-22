import React from 'react'

import './Button.css'

export const ButtonVariant = {
    primary: 'primary',
    secondary: 'secondary',
}

export default function Button({ variant, children, className, disabled, label, onClick, onBlur }) {
    // based on variant set Default 'Button' or Button-variant
    let buttonClass = variant ? `Button-${variant}` : 'Button'
    // pass in class to style a disabled button
    buttonClass += disabled ? '-disabled' : ''
    // option for user to append their own className to style
    buttonClass += className ? ` ${className}` : ''

    return (
        <button
            className={buttonClass}
            aria-label={label}
            disabled={disabled}
            onClick={onClick}
            onBlur={onBlur}
        >
            {children}
        </button>
    )
}
