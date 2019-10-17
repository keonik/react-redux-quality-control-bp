import React, { useEffect } from 'react'

import './Modal.css'

/**
 * Hook that alerts clicks outside of the passed ref
 * https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */
function useOutsideAlerter(ref, trigger) {
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            trigger()
        }
    }

    function handleKeyPress(event) {
        if (ref.current && event.key === 'Escape') {
            trigger()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleKeyPress)
        }
    })
}

export default ({ isOpen, children, onClose }) => {
    // Sets up some references and click handlers for closing the modal
    // when the user clicks outside of the Modal__box area
    const ref = React.useRef(null)
    useOutsideAlerter(ref, onClose)

    // If the modal is not open, just return null
    if (!isOpen) return null

    return (
        <div className="Modal">
            <div className="Modal__box" ref={ref}>
                {children}
            </div>
        </div>
    )
}
