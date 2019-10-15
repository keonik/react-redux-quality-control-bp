import React from 'react';
import { render } from '@testing-library/react';

import ConfirmModal from './ConfirmModal';
import CustomModal from './CustomModal';
import InfoModal from './InfoModal';

const { storeWrapper } = global;
describe('<CustomModal />', () => {
    it('should not render if closed', () => {
        const { container } = render(storeWrapper(<CustomModal title="TEST" content="abc" />));
        expect(container.querySelector('.Modal')).toBe(null);
    });

    // it('should render if opened', () => {
    //     const { container } = render(<CustomModal isOpen />);
    //     expect(container.querySelector('.Modal')).toHaveLength(1);
    // });
    // it('should close on escape press', () => {
    //     const { container } = render(<CustomModal isOpen />);
    //     container.simulate('keydown', { key: 'Escape' });
    //     container.update();
    //     expect(container.prop('isOpen')).toBe(false);
    //     expect('CustomModal').toHaveLength(0);
    // });
    it('should close on outside click', () => {});
});

describe('<ConfirmModal />', () => {
    it('should render primary button', () => {
        const { container } = render(<ConfirmModal isOpen />);
        expect(container.querySelectorAll('.Button-primary')).toHaveLength(1);
    });

    it('should render a cancel button', () => {
        const { container } = render(<ConfirmModal isOpen />);
        expect(container.querySelectorAll('.Button')).toHaveLength(1);
    });
});

describe('<InfoModal />', () => {
    it('should render a primary button', () => {
        const { container } = render(<InfoModal isOpen />);
        expect(container.querySelectorAll('.Button-primary')).toHaveLength(1);
    });
});
