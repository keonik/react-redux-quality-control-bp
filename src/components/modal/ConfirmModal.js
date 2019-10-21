import React from 'react';

import ButtonBar from 'components/button/ButtonBar';
import Button, { ButtonVariant } from 'components/Button';
import CustomModal from './CustomModal';

export default ({ isOpen, title, content, cancelText, confirmText, onCancel, onConfirm }) => {
    return (
        <CustomModal isOpen={isOpen} onClose={onCancel}>
            <div className="ModalTemplate">
                <div className="ModalTemplate__title">
                    <h1>{title}</h1>
                </div>
                <div className="ModalTemplate__content">{content}</div>
                <div className="ModalTemplate__close">
                    <ButtonBar>
                        <Button onClick={onCancel}>{cancelText || 'Cancel'}</Button>
                        <Button variant={ButtonVariant.primary} onClick={onConfirm}>
                            {confirmText || 'Accept'}
                        </Button>
                    </ButtonBar>
                </div>
            </div>
        </CustomModal>
    );
};
