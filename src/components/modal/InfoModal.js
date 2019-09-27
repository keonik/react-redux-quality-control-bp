import React from 'react'

import CustomModal from './CustomModal'
import ButtonBar from '../button/ButtonBar'
import Button, { ButtonVariant } from '../button/Button'

export default ({ isOpen, title, content, buttonText, onClose }) => {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose}>
            <div className="ModalTemplate">
                <div className="ModalTemplate__title">
                    <h1>{title}</h1>
                </div>
                <div className="ModalTemplate__content">{content}</div>
                <div className="ModalTemplate__close">
                    <ButtonBar>
                        <Button variant={ButtonVariant.primary} onClick={onClose}>
                            {buttonText || 'OK'}
                        </Button>
                    </ButtonBar>
                </div>
            </div>
        </CustomModal>
    )
}
